import React, { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import * as Notifications from 'expo-notifications';

import {
  useFonts,
  Jost_400Regular,
  Jost_600SemiBold,
} from '@expo-google-fonts/jost';

import Routes from './src/routes/routes';
import Loader from './src/components/Loader';

import { PlantProps } from './src/dtos';
import light from './src/styles/theme/light';
import { CustomThemeProvider } from './src/hooks/theme';

const App = () => {
  const [fontsLoaded] = useFonts({ Jost_400Regular, Jost_600SemiBold });

  useEffect(() => {
    Notifications.setNotificationHandler({
      handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: false,
        shouldSetBadge: false,
      }),
    });

    const subscription = Notifications.addNotificationReceivedListener(
      async notification => {
        const data = notification.request.content.data.plant as PlantProps;
        console.log(data);
      },
    );

    // Cancel schedulers
    // await Notifications.cancelAllScheduledNotificationsAsync();

    return () => subscription.remove();
  }, []);

  if (!fontsLoaded) {
    return (
      <ThemeProvider theme={light}>
        <Loader />
      </ThemeProvider>
    );
  }

  return (
    <CustomThemeProvider>
      <Routes />
    </CustomThemeProvider>
  );
};

export default App;
