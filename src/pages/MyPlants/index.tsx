import React, { useEffect, useState } from 'react';
import { formatDistance } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { FlatList } from 'react-native';

import { PlantProps } from '../../dtos';
import Header from '../../components/Header';
import waterDrop from '../../assets/waterdrop.png';
import PlantCardSecondary from '../../components/PlantCardSecondary';

import {
  Container,
  Hint,
  HintImage,
  HintText,
  Plants,
  PlantsTitle,
} from './styles';
import { listPlants } from '../../utils/listPlants';
import Loader from '../../components/Loader';

const MyPlants = () => {
  const [loading, setLoading] = useState(true);
  const [plants, setPlants] = useState<PlantProps[]>();
  const [nextWatered, setNextWatered] = useState<string>();

  useEffect(() => {
    async function loadStorage() {
      const plantsStoraged = await listPlants();

      const nextTime = formatDistance(
        new Date(plantsStoraged[0].dateNotification).getTime(),
        new Date().getTime(),
        {
          locale: ptBR,
        },
      );

      setLoading(false);
      setPlants(plantsStoraged);
      setNextWatered(`Regue sua ${plantsStoraged[0].name} daqui a ${nextTime}`);
    }

    loadStorage();
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
          renderItem={({ item }) => <PlantCardSecondary data={item} />}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ flex: 1 }}
        />
      </Plants>
    </Container>
  );
};

export default MyPlants;
