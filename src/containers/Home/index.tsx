import React from 'react';
import {
  View,
} from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';
const Home = () => {

  return (
    <View>
      <YoutubePlayer
        height={300}
        play={false}
        allowWebViewZoom={true}
        videoId={'lw069r6Z6H8'}
      />
    </View>
  );
}; 

export default Home;