import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import { ThemeProvider } from 'styled-components/native';
import SignIn from '../pages/SignIn';
import Welcome from '../pages/Welcome';
import PlantSave from '../pages/PlantSave';
import Confirmation from '../pages/Confirmation';
import AuthRoutes from './auth.routes';
import { useCustomTheme } from '../hooks/theme';

const AppStack = createStackNavigator();

const Routes = () => {
  const { theme } = useCustomTheme();

  return (
    <ThemeProvider theme={theme}>
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
          <AppStack.Screen name="AuthRoutes" component={AuthRoutes} />
          <AppStack.Screen name="PlantSave" component={PlantSave} />
        </AppStack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default Routes;
