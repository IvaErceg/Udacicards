import React from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { Provider } from 'react-redux';
import reducer from './reducers'
import { compose, createStore } from 'redux';
import { autoRehydrate, persistStore } from 'redux-persist';
import { AsyncStorage } from 'react-native';
import { setLocalNotification } from './utils/notifications';
import MainNavigator from './utils/navigation'



const store = createStore(reducer, undefined, autoRehydrate());
persistStore(store, { storage: AsyncStorage });
export default class App extends React.Component {

  componentDidMount() {
    setLocalNotification();
  }

  render() {
    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <StatusBar translucent style={{ backgroundColor: 'purple' }} />
          <MainNavigator />
        </View>
      </Provider>
    )
  }
}
