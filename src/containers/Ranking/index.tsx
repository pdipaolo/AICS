import React from 'react';
import {
  FlatList,
  View
} from 'react-native';

import Item from './components/Item/item';
import Header from './components/Header/header';
import  { ItemType } from './types';
import ranking_mock from '../../mock/ranking.json';
import styles from './styles';
import globalStyles from '../../../src/globalStyles/globalStyles';

const Ranking = () => {
  const {ranking} = ranking_mock;
  const sortRanking = ranking.sort( (a,b) => (a.points < b.points) ? 1 : -1 )
  const render = ( { item, index }: { item: ItemType, index: number }) => {
    return <Item index={index} item={item} />
};

  return (
      <FlatList 
        style={globalStyles.view}
        data={sortRanking}
        renderItem={ render }
        keyExtractor={item => item.id}
        ListHeaderComponent={<Header />}
        stickyHeaderIndices={[0]}
        ItemSeparatorComponent={() => (<View style={styles.separator} />
        )}

      />
  );
}; 

export default Ranking;