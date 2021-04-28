import React, { useCallback, useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { SvgFromUri } from 'react-native-svg';
import DateTimePicker, { Event } from '@react-native-community/datetimepicker';

import { Platform, Alert } from 'react-native';
import { format, isBefore } from 'date-fns';

import {
  Container,
  Content,
  PlantName,
  PlantAbout,
  Controller,
  Hint,
  HintImage,
  HintText,
  ControllerLabel,
  DateTimePickerButton,
  DateTimePickerButtonText,
} from './styles';

import { PlantProps } from '../../dtos';
import Button from '../../components/Button';
import waterDrop from '../../assets/waterdrop.png';
import { savePlant } from '../../utils/savePlant';

interface ParamsProps {
  plant: PlantProps;
}

const PlantSave = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { plant } = route.params as ParamsProps;

  const [showDatePicker, setShowDatePicker] = useState(Platform.OS === 'ios');
  const [selectedDateTime, setSelectedDateTime] = useState(
    plant.dateNotification ? new Date(plant.dateNotification) : new Date(),
  );

  const handleChangeTime = (_: Event, dateTime: Date | undefined) => {
    if (Platform.OS === 'android') {
      setShowDatePicker(oldValue => !oldValue);
    }

    if (dateTime && isBefore(dateTime, new Date())) {
      setSelectedDateTime(new Date());
      Alert.alert('Escolha uma hora no futuro! ⏰');
      return;
    }

    if (dateTime) {
      setSelectedDateTime(dateTime);
    }
  };

  const handleOpenDatatimePickerForAndroid = () => {
    setShowDatePicker(oldValue => !oldValue);
  };

  const handlePlantSave = useCallback(async () => {
    try {
      await savePlant(
        {
          ...plant,
          dateNotification: selectedDateTime,
        },
        !!plant.dateNotification,
      );

      navigation.navigate('Confirmation', {
        title: 'Tudo certo',
        nextScreen: 'AuthRoutes',
        buttonTitle: 'Muito obrigado :D',
        icon: 'hug',
        subTitle:
          'Fique tranquilo que sempre vamos lembrar você de cuidar da sua plantinha com bastante amor.',
      });
    } catch (error) {
      Alert.alert('Não foi possível salvar! 😪');
    }
  }, [navigation, plant, selectedDateTime]);

  return (
    <Container showsVerticalScrollIndicator={false}>
      <Content>
        <SvgFromUri uri={plant.photo} height={180} width={180} />
        <PlantName>{plant.name}</PlantName>
        <PlantAbout>{plant.about}</PlantAbout>
      </Content>

      <Controller>
        <Hint>
          <HintImage source={waterDrop} />

          <HintText>{plant.water_tips}</HintText>
        </Hint>

        <ControllerLabel>
          Escolha o melhor horário para ser lembrado:
        </ControllerLabel>

        {showDatePicker && (
          <DateTimePicker
            value={selectedDateTime}
            mode="time"
            onChange={handleChangeTime}
          />
        )}

        {Platform.OS === 'android' && (
          <DateTimePickerButton onPress={handleOpenDatatimePickerForAndroid}>
            <DateTimePickerButtonText>{`Mudar ${format(
              selectedDateTime,
              'HH:mm',
            )}`}</DateTimePickerButtonText>
          </DateTimePickerButton>
        )}

        <Button
          onPress={handlePlantSave}
          title={
            plant.dateNotification ? 'Atualizar planta' : 'Cadastrar planta'
          }
        />
      </Controller>
    </Container>
  );
};

export default PlantSave;
