import React, { useCallback, useEffect, useState } from 'react';
import { formatDistance } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { Alert, FlatList } from 'react-native';

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
  Plants,
  PlantsTitle,
} from './styles';

const MyPlants = () => {
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
    Alert.alert('Remover', `Deseja remover a ${plant.name}?`, [
      {
        text: 'Não',
        style: 'cancel',
      },
      {
        text: 'Sim',
        onPress: async () => {
          try {
            await removePlant(plant.id);

            setPlants(oldValue =>
              oldValue?.filter(item => item.id !== plant.id),
            );
          } catch (e) {
            Alert.alert('Não foi possível remover');
          }
        },
      },
    ]);
  }, []);

  if (loading) return <Loader />;

  return (
    <Container>
      <Header />

      <Hint>
        <HintImage source={waterDrop} />

        <HintText>{nextWatered}</HintText>
      </Hint>

      <Plants>
        <PlantsTitle>Próximas Regadas</PlantsTitle>

        <FlatList
          data={plants}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <PlantCardSecondary
              data={item}
              handleRemove={() => {
                handleRemove(item);
              }}
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
