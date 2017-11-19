import React from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import DeckList from './components/DeckList';
import NewDeck from './components/NewDeck';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { Provider } from 'react-redux';
import reducer from './reducers'
import { compose, createStore } from 'redux';
import { autoRehydrate, persistStore } from 'redux-persist';
import { AsyncStorage } from 'react-native';
import DeckDetails from './components/DeckDetails';
import NewCard from './components/NewCard';
import CardList from './components/CardList';
import QuizQuestion from './components/QuizQuestion';


const Tabs = TabNavigator({
  Home: {
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
const MainNavigator = StackNavigator({
  DeckList: {
    screen: Tabs,
  },
  DeckDetails: {
    screen: DeckDetails,
  },
  NewCard: {
    screen: NewCard,
  },
  CardList: {
    screen: CardList,
  },
  QuizQuestion: {
    screen: QuizQuestion,
  },
},
);

const store = createStore(reducer, undefined, autoRehydrate());
persistStore(store, {storage: AsyncStorage});
export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={{flex:1}}>
          <StatusBar translucent style={{ backgroundColor: 'purple' }} />
          <MainNavigator/>
        </View>
      </Provider>
    )
  }
}
