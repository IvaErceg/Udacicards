import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Button from './Button';
import { connect } from 'react-redux';
import { addCard } from '../actions';
import Card from './Card';

class DeckDetails extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        title: `${navigation.state.params.deck} deck`,
    });


    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <Text style={styles.text}>{this.props.deck.title.toUpperCase()}</Text>
                <Card><Text style={styles.text}>{this.props.deck.cards} {this.props.deck.cards === 1 ? 'card' : 'cards'}</Text></Card>
                <View>
                    <Button onPressItem={() => navigate('NewCard', {deck: this.props.deck.title})}>Add Card</Button>
                    <Button disabled={this.props.deck.cards < 1 ? true : false} onPressItem={() => navigate('Quiz',  {deck: this.props.deck.title})}>Start Quiz</Button>
                </View>
            </View>

        )
    }
}

function mapStateToProps(state, ownProps) {
    return {
        deck: state.decks.filter(deck => deck.title === ownProps.navigation.state.params.deck)[0]
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold' 
    }
});

export default connect(mapStateToProps, { addCard })(DeckDetails);
