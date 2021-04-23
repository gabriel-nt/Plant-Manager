import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import SignIn from '../pages/SignIn';
import Welcome from '../pages/Welcome';
import PlantSave from '../pages/PlantSave';
import PlantSelect from '../pages/PlantSelect';
import Confirmation from '../pages/Confirmation';

const AppStack = createStackNavigator();

const Routes = () => (
  <NavigationContainer>
    <AppStack.Navigator
      headerMode="none"
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: 'white',
        },
      }}
      initialRouteName="Welcome"
    >
      <AppStack.Screen name="Welcome" component={Welcome} />
      <AppStack.Screen name="SignIn" component={SignIn} />
      <AppStack.Screen name="Confirmation" component={Confirmation} />
      <AppStack.Screen name="PlantSelect" component={PlantSelect} />
      <AppStack.Screen name="PlantSave" component={PlantSave} />
    </AppStack.Navigator>
  </NavigationContainer>
);

export default Routes;
