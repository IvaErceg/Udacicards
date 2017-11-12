import React from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import DeckList from './components/DeckList';
import NewDeck from './components/NewDeck';
import Button from './components/Button';
import { TabNavigator } from 'react-navigation';
import {FontAwesome, Ionicons} from '@expo/vector-icons';

const Tabs = TabNavigator({
  DeckList: {
    screen: DeckList,
    navigationOptions: {
      tabBarLabel: 'All Decks',
      tabBarIcon: ({tintColor}) => <Ionicons name='ios-bookmarks' size={30} color={tintColor}/>
    }
  },
  NewDeck: {
    screen: NewDeck,
    navigationOptions: {
      tabBarLabel: 'New Deck',
      tabBarIcon: ({tintColor}) => <FontAwesome name='plus-square' size={30} color={tintColor}/>
    }
  }
}, {
  navigationOptions: {
    header: null
  },
  tabBarOptions: {
    activeTintColor: 'white',
    style: {
      height: 60,
      paddingTop: 15,
      backgroundColor: 'purple'
    }
  }
}
)


export default class App extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <StatusBar translucent style={{backgroundColor: 'purple'}}/>
        <Tabs />
      </View>
    )
  }
}

