import AsyncStorage from '@react-native-async-storage/async-storage';
import { format } from 'date-fns';

import { PlantProps, StoragePlantProps } from '../dtos';

export async function listPlants(): Promise<PlantProps[]> {
  try {
    const data = await AsyncStorage.getItem('@plantMananger:plants');
    const plants = data ? (JSON.parse(data) as StoragePlantProps) : {};

    const formattedPlants = Object.keys(plants)
      .map(plant => ({
        ...plants[plant].data,
        hour: format(new Date(plants[plant].data.dateNotification), 'HH:mm'),
      }))
      .sort((a, b) =>
        Math.floor(
          new Date(a.dateNotification).getTime() / 100 -
            Math.floor(new Date(b.dateNotification).getTime() / 1000),
        ),
      );

    return formattedPlants;
  } catch (error) {
    throw new Error(error);
  }
}
