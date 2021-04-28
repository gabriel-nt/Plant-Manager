import React, { useCallback, useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Alert, FlatList, View } from 'react-native';
import { formatDistance } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import waterDrop from '../../assets/waterdrop.png';

import { PlantProps } from '../../dtos';
import Header from '../../components/Header';
import Loader from '../../components/Loader';
import PlantCardSecondary from '../../components/PlantCardSecondary';

import { listPlants } from '../../utils/listPlants';
import { removePlant } from '../../utils/removePlant';

import {
  Container,
  Hint,
  HintImage,
  HintText,
  PlantContainer,
  Plants,
  PlantsTitle,
} from './styles';
import ToggleInput from '../../components/ToggleInput';

const MyPlants = () => {
  const navigation = useNavigation();

  const [loading, setLoading] = useState(true);
  const [plants, setPlants] = useState<PlantProps[]>();
  const [nextWatered, setNextWatered] = useState<string>();

  useEffect(() => {
    async function loadStorage() {
      const plantsStoraged = await listPlants();

      if (plantsStoraged.length > 0) {
        const nextTime = formatDistance(
          new Date(plantsStoraged[0].dateNotification).getTime(),
          new Date().getTime(),
          {
            locale: ptBR,
          },
        );

        setPlants(plantsStoraged);
        setNextWatered(
          `Regue sua ${plantsStoraged[0].name} daqui a ${nextTime}`,
        );
      } else {
        setNextWatered(
          `Você não tem nenhum planta cadastrada. Cadastre alguma e confira aqui`,
        );
      }

      setLoading(false);
    }

    loadStorage();
  }, []);

  const handleRemove = useCallback(async (plant: PlantProps) => {
    try {
      await removePlant(plant.id);

      setPlants(oldValue => oldValue?.filter(item => item.id !== plant.id));
    } catch (e) {
      Alert.alert('Não foi possível remover');
    }
  }, []);

  const handleUpdate = useCallback(
    async (plant: PlantProps) => {
      navigation.navigate('PlantSave', { plant });
    },
    [navigation],
  );

  if (loading) return <Loader />;

  return (
    <Container>
      <Header />

      <Hint>
        <HintImage source={waterDrop} />

        <HintText>{nextWatered}</HintText>
      </Hint>

      <Plants>
        <PlantContainer>
          <PlantsTitle>Próximas Regadas</PlantsTitle>
          <ToggleInput />
        </PlantContainer>

        <FlatList
          data={plants}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <PlantCardSecondary
              data={item}
              handleRemove={() => {
                handleRemove(item);
              }}
              onPress={() => handleUpdate(item)}
            />
          )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ flex: 1 }}
        />
      </Plants>
    </Container>
  );
};

export default MyPlants;
