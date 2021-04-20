import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';

import styles from './styles';
import wateringImg from '../../assets/watering.png';

const Welcome = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Gerencie {'\n'} suas plantas {'\n'} de forma fácil
      </Text>

      <Image source={wateringImg} />

      <Text style={styles.subTitle}>
        Não esqueça mais de regar suas {'\n'} plantas. 
        Nós cuidamos de lembrar você
        sempre que precisar.
      </Text>

      <TouchableOpacity 
        style={styles.button}  
        activeOpacity={0.8}
      >
        <Text style={styles.buttonText}>
          >
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default Welcome;
