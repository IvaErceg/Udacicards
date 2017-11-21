import { Notifications, Permissions } from 'expo';
import { AsyncStorage } from 'react-native';

const NOTIFICATION_KEY = 'Udacicards:iva';

export function clearLocalNotification() {
  return AsyncStorage.removeItem(NOTIFICATION_KEY)
    .then(Notifications.cancelAllScheduledNotificationsAsync())
}

function createNotification() {
  return {
    title: 'It\'s quiz time!',
    body: 'It\'s important to quiz yourself every day!',
    ios: {
      sounds: true
    },
    android: {
      sound: true,
      priority: 'high',
      sticky: 'false'
    }
  }
}

export function setLocalNotification() {
  AsyncStorage.getItem(NOTIFICATION_KEY).then(JSON.parse).then(data => {
    if (data === null) {
      Permissions.askAsync(Permissions.NOTIFICATIONS)
        .then(({ status }) => {
          if (status === 'granted') {
            Notifications.cancelAllScheduledNotificationsAsync()
            let tomorrow = new Date();
            tomorrow.setDate(tomorrow.getDate() + 1);
            tomorrow.setHours(19);
            tomorrow.setMinutes(0);
            Notifications.scheduleLocalNotificationAsync(
              createNotification(),
              {
                time: tomorrow,
                repeat: 'day',
              }
            )
            AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
          }
        })
    }
  })
}