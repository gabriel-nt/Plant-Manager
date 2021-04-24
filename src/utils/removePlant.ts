import * as Notifications from 'expo-notifications';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { StoragePlantProps } from '../dtos';

export async function removePlant(id: string): Promise<void> {
  const data = await AsyncStorage.getItem('@plantManager:plants');
  const storagePlants = data ? (JSON.parse(data) as StoragePlantProps) : {};

  await Notifications.cancelScheduledNotificationAsync(
    storagePlants[id].notificationId,
  );

  delete storagePlants[id];

  await AsyncStorage.setItem(
    '@plantManager:plants',
    JSON.stringify(storagePlants),
  );
}
