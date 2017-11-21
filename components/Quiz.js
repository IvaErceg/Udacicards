import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from './Button';
import { connect } from 'react-redux';
import Card from './Card';
import { clearLocalNotification, setLocalNotification } from '../utils/notifications';

export class Quiz extends Component {
    state = {
        current: 1,
        correct: 0,
        flipped: false
    }

    flip = () => {
        this.setState(prevState => ({
            flipped: !prevState.flipped
        }))
    }

    onCorrect = () => {
        const { current } = this.state
        const index = current - 1;
        const { question, answer } = this.props.questions[index]

        this.setState(prevState => ({
            flipped: false,
            correct: prevState.correct + 1,
            current: prevState.current + 1,
        }))
    }

    onIncorrect = () => {
        this.setState(prevState => ({
            flipped: false,
            current: prevState.current + 1,
        }))

    }

    showQuestions = () => {
        const { current, correct, flipped } = this.state
        const { questions } = this.props
        const index = current - 1;

        return (
            <View style={styles.container}>
                <Card>
                    <Text style={{alignSelf:'flex-end', marginBottom:'25%'}}>
                        {current} / {questions.length}
                    </Text>
                    <Text style={styles.text}>{flipped
                        ? questions[index].answer
                        : questions[index].question}
                    </Text>
                </Card>
                <View>
                    <Button
                        onPressItem={this.flip}>
                        <Text>
                            {flipped ? 'Show Question' : 'Show Answer'}
                        </Text>
                    </Button>
                </View>

                <View style={styles.buttons}>
                    <Button
                        onPressItem={this.onCorrect}>
                        <Text>Correct</Text>
                    </Button>
                    <Button onPressItem={this.onIncorrect}>
                        <Text>Incorrect</Text>
                    </Button>
                </View>
            </View>
        )
    }

    showScore() {
        const { correct } = this.state
        const { questions } = this.props
        clearLocalNotification().then(setLocalNotification);
        return (
            <View style={styles.container}>
                <Text>
                    You scored:
                 </Text>
                <View>
                    <Text>
                        {correct / questions.length * 100}%
                     </Text>
                </View>
                <Button
                    onPressItem={this.restart}>
                    <Text>Restart</Text>
                </Button>
                <Button onPressItem={() => this.props.navigation.navigate('DeckDetails', { deck: this.props.deck.title })}>
                    <Text>Back to the deck</Text>
                </Button>
            </View>
        )
    }

    restart = () => {
        this.setState({
            current: 1,
            correct: 0,
            flipped: false
        })
    }

    render() {
        const { questions } = this.props
        const { current, correct, flipped } = this.state

        return (
            current <= questions.length
                ? this.showQuestions()
                : this.showScore()
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    text: {
        fontSize: 26
    }
});

function mapStateToProps(state, ownProps) {
    const title = ownProps.navigation.state.params.deck;
    const deck = state.decks.filter(deck => deck.title === title)[0];
    const questions = deck.questions;
    return {
        questions,
        deck
    }
}

export default connect(mapStateToProps)(Quiz)