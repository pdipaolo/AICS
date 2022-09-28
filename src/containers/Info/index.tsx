import React from 'react';
import { ScrollView } from 'react-native';
import globalStyles from '../../globalStyles/globalStyles';
import { ImageType } from '../../utils/getImage';
import Item from './components/item.tsx';
import ItemReference from './components/referenceItem';
const Info = () => {
  return (
    <ScrollView style={globalStyles.view}>
      <Item text='Gruppo Organizzatore' image={ImageType.Logo_1}/>
      <Item text='Supporto Campionato' image={ImageType.Logo_2}/>
      <ItemReference
        name='Gennaro Bonocore'
        reference='Referente Campionato GB Aics'
        description='Il contatto è disponibile nei seguenti orari 9:00 - 12:00 | 16:00 - 19:00 Nei giorni Lunedì - Mercoledì - Venerdì'
        number='081321321'
        email='p@gmail.com'
      />
    </ScrollView>
  );
}; 

export default Info;