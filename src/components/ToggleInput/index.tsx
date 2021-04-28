import React, { useContext } from 'react';
import { Ionicons } from '@expo/vector-icons';
import ToggleButton from 'react-native-toggle-element';
import { ThemeContext } from 'styled-components/native';

import { useCustomTheme } from '../../hooks/theme';

const ToggleInput = () => {
  const { title } = useContext(ThemeContext);
  const { toggleTheme } = useCustomTheme();

  return (
    <ToggleButton
      value={title === 'dark'}
      onPress={toggleTheme}
      thumbActiveComponent={
        <Ionicons
          name="moon"
          size={24}
          style={{ paddingTop: 1, paddingLeft: 2, color: '#fff' }}
        />
      }
      thumbInActiveComponent={
        <Ionicons
          name="sunny"
          size={24}
          style={{ paddingTop: 1, paddingLeft: 2, color: '#232423' }}
        />
      }
      trackBar={{
        activeBackgroundColor: '#fff',
        inActiveBackgroundColor: '#232423',
        borderWidth: 4,
        borderActiveColor: '#fff',
        borderInActiveColor: '#232423',
        width: 64,
        height: 34,
      }}
      thumbButton={{
        width: 36,
        height: 36,
        activeBackgroundColor: '#232423',
        inActiveBackgroundColor: '#fff',
      }}
    />
  );
};

export default ToggleInput;
