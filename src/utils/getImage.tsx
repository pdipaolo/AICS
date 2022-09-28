import React from 'react';
import Image from '../assets/dream-1.svg';
import Phone from '../assets/phone.svg';
import Mail from '../assets/mail.svg';
import Logo_1 from '../assets/logo-1.svg';
import Logo_2 from '../assets/logo-2.svg';

import Player1 from '../assets/players/1.svg';
import Player2 from '../assets/players/2.svg';
import Player3 from '../assets/players/3.svg';



const getImage = (value: ImageType) => {
  switch (value) {
    case ImageType.Dream_1:
      return <Image height="100%" widht="100%" />
    case ImageType.Player_1:
      return <Player1 height="100%" widht="100%" />
    case ImageType.Player_2:
      return <Player2 height="100%" widht="100%" />
    case ImageType.Player_3:
      return <Player3 height="100%" widht="100%" />
    case ImageType.Mail:
      return <Mail height={20} widht={20} fill={"white"} />
    case ImageType.Phone:
      return <Phone height={20} widht={20} fill={"white"}/>
    case ImageType.Logo_1:
      return <Logo_1 height="90%" widht="100%" />
    case ImageType.Logo_2:
      return <Logo_2 height="100%" widht="100%" />
    default:
      break;
  }
  
  
};

enum ImageType {
  Dream_1,
  Player_1,
  Player_2,
  Player_3,
  Phone,
  Mail,
  Logo_1,
  Logo_2
}

export { getImage , ImageType} ;

