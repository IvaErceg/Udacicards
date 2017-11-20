import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Button from './Button';
import { Animated, ScrollView } from 'react-native'
import { connect } from 'react-redux';
import Card from './Card';

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
        const { question, answer } = this.props.questions[current - 1]

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
        const { questions } = this.props
        const { current, correct, flipped } = this.state

        return (
            <View style={styles.container}>
                <Card style={{ color: 'green' }}>
                    <Text>
                        {current} / {questions.length}
                    </Text>
                    <Text>{flipped
                        ? questions[current - 1].answer
                        : questions[current - 1].question}
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

function mapStateToProps(state, ownProps) {
    const title = ownProps.navigation.state.params.deck;
    const deck = state.decks.filter(deck => deck.title === title)[0];
    const questions = deck.questions;
    return {
        questions,
        deck
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    card: {
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'yellow'
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    title: {
        fontSize: 28,
    },
    text: {
        fontSize: 32,
        fontWeight: 'bold'
    }
});

export default connect(mapStateToProps)(Quiz)