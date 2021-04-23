import React, { useEffect, useState } from 'react';
import { useRoute } from '@react-navigation/native';
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
  const { plant } = route.params as ParamsProps;

  const [selectedDateTime, setSelectedDateTime] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(Platform.OS === 'ios');

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

  const handlePlantSave = async () => {
    try {
      await savePlant({
        ...plant,
        dateNotification: selectedDateTime,
      });
    } catch (error) {
      Alert.alert('Não foi possível salvar! 😪');
    }
  };

  return (
    <Container>
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

        <Button title="Cadastrar planta" onPress={handlePlantSave} />
      </Controller>
    </Container>
  );
};

export default PlantSave;
