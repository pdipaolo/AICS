import React from 'react';
import {
  ScrollView,
  Text,
  View,
  Dimensions
} from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';
import { getImage, ImageType } from '../../utils/getImage';

import PLAYERS from './constants';
import globalStyles from '../../globalStyles/globalStyles';
import styles from './styles';

const Home = () => {

  const shuffled = PLAYERS.sort(() => 0.5 - Math.random());
  let selected = shuffled.slice(0, 2);
  const windowWidth = Dimensions.get('window').width * 0.8;

  return (
    <ScrollView style={globalStyles.view}>
      <Text style={styles.title}>Video Della Settimana</Text>
      <View style={styles.video}>
        <YoutubePlayer
          width={windowWidth}
          height={180}
          play={false}
          videoId={'lw069r6Z6H8'}
        />
      </View>
      <View style={styles.vLine}/>
      <Text style={styles.title}>Giocatori Random</Text>
      <View style={styles.containerImage}>
        <View style={styles.image}>{getImage(ImageType[selected[0]])}</View>
        <View style={styles.hLine}/>
        <View style={styles.image}>{getImage(ImageType[selected[1]])}</View>
      </View>
      <View style={styles.vLine}/>
    </ScrollView>
  );
}; 

export default Home;