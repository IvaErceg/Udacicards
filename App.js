import React from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import DeckList from './components/DeckList';
import NewDeck from './components/NewDeck';
import { TabNavigator } from 'react-navigation';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { Provider } from 'react-redux';
import reducer from './reducers'
import { compose, createStore } from 'redux';
import { autoRehydrate, persistStore } from 'redux-persist';
import { AsyncStorage } from 'react-native'


const Tabs = TabNavigator({
  DeckList: {
    screen: DeckList,
    navigationOptions: {
      tabBarLabel: 'All Decks',
      tabBarIcon: ({ tintColor }) => <Ionicons name='ios-bookmarks' size={30} color={tintColor} />
    }
  },
  NewDeck: {
    screen: NewDeck,
    navigationOptions: {
      tabBarLabel: 'New Deck',
      tabBarIcon: ({ tintColor }) => <FontAwesome name='plus-square' size={30} color={tintColor} />
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

const store = createStore(reducer, undefined, autoRehydrate());
persistStore(store, {storage: AsyncStorage});
export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <StatusBar translucent style={{ backgroundColor: 'purple' }} />
          <Tabs />
        </View>
      </Provider>
    )
  }
}

