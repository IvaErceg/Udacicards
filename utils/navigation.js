import { TabNavigator, StackNavigator } from 'react-navigation';
import DeckList from '../components/DeckList';
import NewDeck from '../components/NewDeck';
import DeckDetails from '../components/DeckDetails';
import NewCard from '../components/NewCard';
import Quiz from '../components/Quiz';

const Tabs = TabNavigator({
    Home: {
      screen: DeckList,
      navigationOptions: {
        tabBarLabel: 'All Decks',
      }
    },
    NewDeck: {
      screen: NewDeck,
      navigationOptions: {
        tabBarLabel: 'New Deck',
      }
    }
  }, {
      navigationOptions: {
        header: null
      },
      tabBarOptions: {
        style: {
          height: 60,
          paddingTop: 15,
          backgroundColor: 'purple'
        }
      }
    }
  )
  
const DeckDetailsWithTabs = TabNavigator({
    DeckDetails: {
      screen: DeckDetails,
      navigationOptions: {
        tabBarLabel: 'Details',
      }
    },
    Home: {
      screen: DeckList,
      navigationOptions: {
        tabBarLabel: 'All Decks',
      }
    },
    New: {
      screen: NewDeck,
      navigationOptions: {
        tabBarLabel: 'New Deck',
      }
    },
  
  },
    {
      navigationOptions: {
        header: null
      },
      tabBarOptions: {
        style: {
          height: 60,
          paddingTop: 15,
          backgroundColor: 'purple'
        }
      }
    }
  )
  
  export default MainNavigator = StackNavigator({
    DeckList: {
      screen: Tabs,
    },
    DeckDetails: {
      screen: DeckDetailsWithTabs,
    },
    NewCard: {
      screen: NewCard,
    },
    Quiz: {
      screen: Quiz,
    },
  },
  );