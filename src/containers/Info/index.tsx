import React from 'react';
import { TouchableOpacity, ScrollView, Text, View, Linking } from 'react-native';
import globalStyles from '../../globalStyles/globalStyles';
import { ImageType } from '../../utils/getImage';
import Item from './components/item.tsx';
import ItemReference from './components/referenceItem';
import styles from './styles';
const Info = () => {
  const url = 'www.CampionatoAicsNapoli.it' ;
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
      <View style={styles.site}>
        <Text style={styles.text}>Visita anche la pagina Web</Text>
        <Text style={styles.subText}>Tutti gli aggiornamenti, news e risultati della settimana del campionato Aics, marchiato GB Tournament li puoi trovare solo sulla pagina WEB Ufficiale.</Text>
        <TouchableOpacity style={styles.button} onPress={() => Linking.openURL(`http://${url}`)}>
          <Text style={styles.buttonText}>{url}</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}; 

export default Info;