import React from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, ScrollView, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import { addCard} from '../actions';
import Button from './Button';
import { Keyboard } from 'react-native';


class NewCard extends React.Component {
static navigationOptions = ({ navigation }) => ({
        title: `Add Card`,
    });
  state = {
    question: '',
    answer: ''
  }

  saveCard = () => {
    const question = {question: this.state.question, answer: this.state.answer}
    this.props.addCard(this.props.deck.id, question);
    this.props.navigation.navigate('DeckDetails', {deck: this.props.deck.title});
    Keyboard.dismiss(); 
  }

  render() {
    return (
      <View style={{ flex: 1, margin: 30, alignItems: 'center' }}>
        <TextInput style={{ height: 40, width: 300, padding: 10 }}
          onChangeText={(question) => this.setState({ question })}
          value={this.state.question}
          placeholder="Question" />
          <TextInput style={{ height: 40, width: 300, padding: 10 }}
          onChangeText={(answer) => this.setState({ answer })}
          value={this.state.answer}
          placeholder="Answer" />
        <Button onPressItem={this.saveCard}>SAVE</Button>
      </View>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    deck: state.decks.filter(deck => deck.title === ownProps.navigation.state.params.deck)[0]
  };
}

export default connect(mapStateToProps, { addCard })(NewCard);