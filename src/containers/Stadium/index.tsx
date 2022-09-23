import React from 'react';
import {
  FlatList,
  View
} from 'react-native';

import Item from './components/Item';
import ItemStadium from './types';

import styles from './styles';

import MockStadium from '../../mock/stadium.json';

const Stadium = () => {
const { stadium } = MockStadium;

const render = ( { item, index }: { item: ItemStadium, index: number }) => {
  const { id, name, description, lng, lat } = item;
  return <Item index={index} id={id} name={name} description={description} lng={lng} lat={lat} />
};

  return (
    <FlatList 
    data={stadium}
    renderItem={ render }
    keyExtractor={item => item.id}
    ItemSeparatorComponent={() => (<View style={styles.separator} />
    )}

  />

  );
}; 

export default Stadium;