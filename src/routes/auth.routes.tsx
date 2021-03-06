import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';
import { Platform } from 'react-native';
import { useTheme } from 'styled-components';
import PlantSelect from '../pages/PlantSelect';
import MyPlants from '../pages/MyPlants';

const AppTab = createBottomTabNavigator();

const AuthRoutes = () => {
  const theme = useTheme();

  return (
    <AppTab.Navigator
      tabBarOptions={{
        style: {
          height: Platform.OS === 'ios' ? 88 : 66,
          paddingVertical: Platform.OS === 'ios' ? 20 : 0,
        },
        labelPosition: 'beside-icon',
        activeTintColor: theme.colors.green,
        inactiveTintColor: theme.colors.gray,
      }}
    >
      <AppTab.Screen
        name="New Plant"
        component={PlantSelect}
        options={{
          tabBarIcon: ({ color, size }) => {
            return (
              <MaterialIcons
                name="add-circle-outline"
                size={size}
                color={color}
              />
            );
          },
        }}
      />

      <AppTab.Screen
        name="My Plants"
        component={MyPlants}
        options={{
          tabBarIcon: ({ color, size }) => {
            return (
              <MaterialIcons
                name="format-list-bulleted"
                size={size}
                color={color}
              />
            );
          },
        }}
      />
    </AppTab.Navigator>
  );
};

export default AuthRoutes;
