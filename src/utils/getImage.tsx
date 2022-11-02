import React from 'react';
import { Image } from 'react-native';
import FastImage from 'react-native-fast-image'

import Phone from '../assets/phone.svg';
import Mail from '../assets/mail.svg';
import Logo_Juni from '../assets/juniblack.svg';
import Logo_2 from '../assets/logo-2.svg';

import Sponsor_1 from '../assets/sponsor/mytrip.svg';
import Sponsor_2 from '../assets/sponsor/iconacasa.svg';
import Sponsor_3 from '../assets/sponsor/juninow.svg';
import Sponsor_4 from '../assets/sponsor/mytripnaples.svg';
import Sponsor_5 from '../assets/sponsor/mytripvesuvius.svg';
import Sponsor_6 from '../assets/sponsor/assoutenti.svg';

const getImage = (value: ImageType) => {
  switch (value) {
    case ImageType.Dream_1:
      return <Image style={{ height: '100%', width: '100%', resizeMode: 'contain' }} source={require('../assets/dreams/dream_1.png')} />
    case ImageType.Dream_2:
      return <Image style={{ height: '100%', width: '100%', resizeMode: 'contain' }} source={require('../assets/dreams/dream_2.png')} />
    case ImageType.Dream_3:
      return <Image style={{ height: '100%', width: '100%', resizeMode: 'contain' }} source={require('../assets/dreams/dream_3.png')} />
    case ImageType.Dream_4:
      return <Image style={{ height: '100%', width: '100%', resizeMode: 'contain' }} source={require('../assets/dreams/dream_4.png')} />
    case ImageType.Dream_5:
      return <Image style={{ height: '100%', width: '100%', resizeMode: 'contain' }} source={require('../assets/dreams/dream_5.png')} />
    case ImageType.Dream_6:
      return <Image style={{ height: '100%', width: '100%', resizeMode: 'contain' }} source={require('../assets/dreams/dream_6.png')} />
    case ImageType.Dream_7:
      return <Image style={{ height: '100%', width: '100%', resizeMode: 'contain' }} source={require('../assets/dreams/dream_7.png')} />
    case ImageType.Dream_8:
      return <Image style={{ height: '100%', width: '100%', resizeMode: 'contain' }} source={require('../assets/dreams/dream_8.png')} />
    case ImageType.Dream_9:
      return <Image style={{ height: '100%', width: '100%', resizeMode: 'contain' }} source={require('../assets/dreams/dream_9.png')} />
    case ImageType.Dream_10:
      return <Image style={{ height: '100%', width: '100%', resizeMode: 'contain' }} source={require('../assets/dreams/dream_10.png')} />
    case ImageType.Dream_11:
      return <Image style={{ height: '100%', width: '100%', resizeMode: 'contain' }} source={require('../assets/dreams/dream_11.png')} />
    case ImageType.Dream_12:
      return <Image style={{ height: '100%', width: '100%', resizeMode: 'contain' }} source={require('../assets/dreams/dream_12.png')} />
    case ImageType.Dream_13:
      return <Image style={{ height: '100%', width: '100%', resizeMode: 'contain' }} source={require('../assets/dreams/dream_13.png')} />
    case ImageType.Dream_14:
      return <Image style={{ height: '100%', width: '100%', resizeMode: 'contain' }} source={require('../assets/dreams/dream_14.png')} />
    case ImageType.Dream_15:
      return <Image style={{ height: '100%', width: '100%', resizeMode: 'contain' }} source={require('../assets/dreams/dream_15.png')} />
    case ImageType.Dream_16:
      return <Image style={{ height: '100%', width: '100%', resizeMode: 'contain' }} source={require('../assets/dreams/dream_16.png')} />
    case ImageType.Dream_17:
      return <Image style={{ height: '100%', width: '100%', resizeMode: 'contain' }} source={require('../assets/dreams/dream_17.png')} />
    case ImageType.Dream_18:
      return <Image style={{ height: '100%', width: '100%', resizeMode: 'contain' }} source={require('../assets/dreams/dream_18.png')} />
    case ImageType.Dream_19:
      return <Image style={{ height: '100%', width: '100%', resizeMode: 'contain' }} source={require('../assets/dreams/dream_19.png')} />
    case ImageType.Player_1:
      return <FastImage style={{ width: "100%", height: "100%" }} source={require('../assets/players/Player_1.png')} resizeMode={FastImage.resizeMode.contain} /> 
    case ImageType.Player_2:
      return <FastImage style={{ width: "100%", height: "100%" }} source={require('../assets/players/Player_2.png')} resizeMode={FastImage.resizeMode.contain} /> 
    case ImageType.Player_3:
      return <FastImage style={{ width: "100%", height: "100%" }} source={require('../assets/players/Player_3.png')} resizeMode={FastImage.resizeMode.contain} /> 
    case ImageType.Player_4:
      return <FastImage style={{ width: "100%", height: "100%" }} source={require('../assets/players/Player_4.png')} resizeMode={FastImage.resizeMode.contain} /> 
    case ImageType.Player_5:
      return <FastImage style={{ width: "100%", height: "100%" }} source={require('../assets/players/Player_5.png')} resizeMode={FastImage.resizeMode.contain} /> 
    case ImageType.Player_6:
      return <FastImage style={{ width: "100%", height: "100%" }} source={require('../assets/players/Player_6.png')} resizeMode={FastImage.resizeMode.contain} /> 
    case ImageType.Mister_1:
      return <FastImage style={{ width: "100%", height: "100%" }} source={require('../assets/players/Mister_1.png')} resizeMode={FastImage.resizeMode.contain} /> 
    case ImageType.Mister_2:
      return <FastImage style={{ width: "100%", height: "100%" }} source={require('../assets/players/Mister_2.png')} resizeMode={FastImage.resizeMode.contain} /> 
    case ImageType.Mister_3:
      return <FastImage style={{ width: "100%", height: "100%" }} source={require('../assets/players/Mister_3.png')} resizeMode={FastImage.resizeMode.contain} /> 
    case ImageType.Mail:
      return <Mail height={20} widht={20} fill={"white"} />
    case ImageType.Phone:
      return <Phone height={20} widht={20} fill={"white"} />
    case ImageType.Logo_Juni:
      return <Logo_Juni height="90%" widht="100%" />
    case ImageType.Logo_2:
      return <Logo_2 height="100%" widht="100%" />
    case ImageType.Sponsor_1:
      return <FastImage style={{ width: 350, height: 200 }} source={require('../assets/sponsor/mytripto.png')} resizeMode={FastImage.resizeMode.contain} />
    case ImageType.Sponsor_2:
      return <Sponsor_2 height="60" widht="50" />
    case ImageType.Sponsor_3:
      return <Sponsor_3 height="60" widht="60" />
    case ImageType.Sponsor_4:
      return <FastImage style={{ width: 350, height: 200 }} source={require('../assets/sponsor/mytripnaples.png')} resizeMode={FastImage.resizeMode.contain} />
    case ImageType.Sponsor_5:
      return <FastImage style={{ width: 350, height: 200 }} source={require('../assets/sponsor/mytripvesuvius.png')} resizeMode={FastImage.resizeMode.contain} />
    case ImageType.Sponsor_6:
      return <Sponsor_6 height="200" widht="200" />
    default:
      break;
  }


};

enum ImageType {
  Dream_1,
  Dream_2,
  Dream_3,
  Dream_4,
  Dream_5,
  Dream_6,
  Dream_7,
  Dream_8,
  Dream_9,
  Dream_10,
  Dream_11,
  Dream_12,
  Dream_13,
  Dream_14,
  Dream_15,
  Dream_16,
  Dream_17,
  Dream_18,
  Dream_19,
  Player_1,
  Player_2,
  Player_3,
  Player_4,
  Player_5,
  Player_6,
  Mister_1,
  Mister_2,
  Mister_3,
  Phone,
  Mail,
  Logo_Juni,
  Logo_2,
  Sponsor_1,
  Sponsor_2,
  Sponsor_3,
  Sponsor_4,
  Sponsor_5,
  Sponsor_6
}

export { getImage, ImageType };

