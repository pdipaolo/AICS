import React, { useEffect, useState } from 'react';
import {
  FlatList,
  View,
  TouchableOpacity,
} from 'react-native';
import { black } from '../../constants/colors';
import Item from './components/Item/item';
import Header from './components/Header/header';
import  { ItemType } from './types';
import styles from './styles';
import globalStyles from '../../../src/globalStyles/globalStyles';
import ReloadIcon from '../../assets/reload.svg';

const Ranking = ({navigation}: any ) => {
  const [ranking, setRanking] = useState([])
  const render = ( { item, index }: { item: ItemType, index: number }) => {
    return <Item index={index} item={item} />
};

useEffect(() => {
  navigation.setOptions({
    headerRight: () => (
      <TouchableOpacity style={{marginRight: 16}} onPress={()=>getApi()}><ReloadIcon width={26} height={26} fill={black}/></TouchableOpacity>
    ),
  });
}, [navigation]);

useEffect(() => {
  getApi()
},[])

async function getApi() {
  try {
    let response = await fetch(
      'https://classifica-aics-2022-default-rtdb.europe-west1.firebasedatabase.app/ranking.json',
    );
    let responseJson = await response.json();
    const sortRanking = responseJson.sort( (a: { points: number; name: number; },b: { points: number; name: number; }) => (a.name > b.name || a.points < b.points) ? 1 : -1 );
    setRanking(sortRanking);
  } catch (error) {
    console.error(error);
  }
}

  return (
      <FlatList 
        style={globalStyles.view}
        data={ranking}
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