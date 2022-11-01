import React, { useEffect } from 'react';
import {
  ScrollView,
  Text,
  View,
  Dimensions
} from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';

import PLAYERS from './constants';
import globalStyles from '../../globalStyles/globalStyles';
import styles from './styles';
import SplashScreen from 'react-native-splash-screen'

const Home = () => {

  const shuffled = PLAYERS.sort(() => 0.5 - Math.random());
  let selected = shuffled.slice(0, 2);
  const windowWidth = Dimensions.get('window').width * 0.8;

  useEffect(()=>{
    SplashScreen.hide();
  },[])
  return (
    <ScrollView style={globalStyles.view}>
      <Text style={styles.title}>Video</Text>
      <View style={styles.video}>
        <YoutubePlayer
          width={windowWidth}
          height={180}
          play={false}
          videoId={'CS1ppXSPsdk'}
        />
      </View>
      <View style={styles.vLine}/>
      <Text style={styles.title}>Alcuni dei nostri giocatori</Text>
      <View style={styles.containerImage}>
        <View style={styles.image}>
          {selected[0].image}
          <Text style={{textAlign:'center'}}>{selected[0].name}</Text>
        </View>

        <View style={styles.hLine}/>
        <View style={styles.image}>
          {selected[1].image}
          <Text style={{textAlign:'center'}}>{selected[1].name}</Text>
        </View>
      </View>
    </ScrollView>
  );
}; 

export default Home;