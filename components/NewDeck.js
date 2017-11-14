import React from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, ScrollView, AsyncStorage} from 'react-native';
import { connect } from 'react-redux';
import { addDeck } from '../actions';

class NewDeck extends React.Component {
  state = {
    text: ''
  }

  saveDeck = () => {
    this.props.addDeck(this.state.text);
    this.setState({text: ''})
  }

  render() {
    return (
      <View style={{ flex: 1, margin: 30, alignItems: 'center'}}>
        <TextInput style={{ height: 40, width: 300, padding: 10}}
          onChangeText={(text) => this.setState({ text })}
          value={this.state.text}
          placeholder="Name" />
        <TouchableOpacity style={{ backgroundColor: 'purple', borderRadius: 5, paddingHorizontal: 10, paddingVertical: 5}} onPress={this.saveDeck}>
          <Text style={{ color: 'white'}}>SAVE</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

function mapStateToProps(state) {
  console.log(state);
  return {
    decks: state.decks
  };
}

export default connect(mapStateToProps,  { addDeck })(NewDeck);