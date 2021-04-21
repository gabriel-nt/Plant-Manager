import React, { useEffect, useState } from 'react';
import { View, FlatList, ActivityIndicator } from 'react-native';

import api from '../../services/api';
import Header from '../../components/Header';
import Loader from '../../components/Loader';
import PlantCardPrimary from '../../components/PlantCardPrimary';
import EnvironmentButton from '../../components/EnvironmentButton';

import {
  Container,
  Content,
  Title,
  SubTitle,
  EnvironmentList,
  Plants,
} from './styles';

interface EnvironmentProps {
  key: string;
  title: string;
}

interface PlantProps {
  id: string;
  name: string;
  about: string;
  water_tips: string;
  photo: string;
  environments: Array<string>;
  frequency: {
    times: number;
    repeat_every: string;
  };
}

const PlantSelect = () => {
  const [loading, setLoading] = useState(true);
  const [plants, setPlants] = useState<PlantProps[]>([]);
  const [filteredPlants, setFilteredPlants] = useState<PlantProps[]>([]);
  const [environmentSeleted, setEnvironmentSelected] = useState('all');
  const [environments, setEnvironments] = useState<EnvironmentProps[]>([]);

  const [page, setPage] = useState(1);
  const [loadedAll, setLoadedAll] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);

  useEffect(() => {
    async function loadData() {
      const { data } = await api.get('plants_environments', {
        params: {
          _sort: 'title',
          _order: 'asc',
        },
      });

      setEnvironments([
        {
          key: 'all',
          title: 'Todos',
        },
        ...data,
      ]);
    }

    loadData();
  }, []);

  useEffect(() => {
    async function loadData() {
      const { data } = await api.get('plants', {
        params: {
          _sort: 'name',
          _order: 'asc',
          _page: page,
          _limit: 8,
        },
      });

      if (!data || data.length === 0) {
        setLoadedAll(true);
        setLoadingMore(false);
        return;
      }

      if (page > 1) {
        setPlants(oldValue => [...oldValue, ...data]);
        setFilteredPlants(oldValue => [...oldValue, ...data]);
      } else {
        setPlants(data);
        setFilteredPlants(data);
      }

      setLoading(false);
      setLoadingMore(false);
    }

    loadData();
  }, [page]);

  const handleEnvironmentSelect = (environment: string) => {
    setEnvironmentSelected(environment);

    if (environment === 'all') {
      setFilteredPlants(plants);
    } else {
      const filtered = plants.filter(plant =>
        plant.environments.includes(environment),
      );

      setFilteredPlants(filtered);
    }
  };

  const handleFetchMore = (distance: number) => {
    if (distance < 1 || loadedAll) return;

    setLoadingMore(true);
    setPage(oldValue => oldValue + 1);
  };

  if (loading) return <Loader />;

  return (
    <Container>
      <Content>
        <Header />

        <Title>Em qual ambiente</Title>
        <SubTitle>você quer colocar sua planta</SubTitle>
      </Content>

      <View>
        <FlatList
          horizontal
          keyExtractor={item => item.key}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={EnvironmentList}
          data={environments}
          renderItem={({ item }) => (
            <EnvironmentButton
              key={item.key}
              title={item.title}
              onPress={() => handleEnvironmentSelect(item.key)}
              active={item.key === environmentSeleted}
            />
          )}
        />
      </View>

      <Plants>
        <FlatList
          data={filteredPlants}
          numColumns={2}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          onEndReachedThreshold={0.1}
          onEndReached={({ distanceFromEnd }) =>
            handleFetchMore(distanceFromEnd)
          }
          renderItem={({ item }) => <PlantCardPrimary data={item} />}
          ListFooterComponent={
            loadingMore ? (
              <ActivityIndicator color="#32B768" size="large" />
            ) : (
              <></>
            )
          }
        />
      </Plants>
    </Container>
  );
};

export default PlantSelect;
