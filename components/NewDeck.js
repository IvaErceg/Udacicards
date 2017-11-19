import React from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, ScrollView, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import { addDeck } from '../actions';
import Button from './Button';

class NewDeck extends React.Component {
  state = {
    text: ''
  }
  saveDeck = () => {
    
    this.props.addDeck(this.state.text);
    this.setState({ text: '' })
    this.props.navigation.goBack();
  }

  render() {
    return (
      <View style={{ flex: 1, margin: 30, alignItems: 'center' }}>
        <TextInput style={{ height: 40, width: 300, padding: 10 }}
          onChangeText={(text) => this.setState({ text })}
          value={this.state.text}
          placeholder="Name" />
        <Button onPressItem={this.saveDeck}>SAVE</Button>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    decks: state.decks
  };
}

export default connect(mapStateToProps, { addDeck })(NewDeck);