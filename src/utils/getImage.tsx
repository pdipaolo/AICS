import React from 'react';
import Image from '../assets/dream-1.svg';

const getImage = (value: ImageType) => {
  switch (value) {
    case ImageType.Dream_1:
      return <Image height="100%" widht="100%" />
    default:
      break;
  }
  
  
};

enum ImageType {
  Dream_1
}

export { getImage , ImageType} ;
