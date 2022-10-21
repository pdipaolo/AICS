import React from 'react';
import { TouchableOpacity, ScrollView, Text, View, Linking } from 'react-native';
import globalStyles from '../../globalStyles/globalStyles';
import { ImageType } from '../../utils/getImage';
import Item from './components/item.tsx';
import ItemReference from './components/referenceItem';
import styles from './styles';
const Info = () => {
  const url = 'www.aicsnapolicalcio.it' ;
  return (
    <ScrollView style={globalStyles.view}>
      <Item text='Supporto Campionato' image={ImageType.Logo_2}/>
      <Item text='Software Developer' image={ImageType.Logo_Juni}/>
      <ItemReference
        name='Gennaro Bonocore'
        reference='Responsabile Settore calcio aics'
        description='Il contatto è disponibile nei seguenti orari 9:00 - 12:00 | 16:00 - 19:00 Nei giorni Lunedì - Mercoledì - Venerdì'
        number='3453145193'
        email='info@aicsnapolicalcio.it'
      />
      <ItemReference
        name='Segreteria AICS'
        reference=''
        description='Il contatto è disponibile nei seguenti orari 9:00 - 12:00 | 16:00 - 19:00 Nei giorni Lunedì - Mercoledì - Venerdì'
        number='081294480'
        email='info@aicsnapolicalcio.it'
      />
      <View style={styles.site}>
        <Text style={styles.text}>Visita anche la pagina Web</Text>
        <Text style={styles.subText}>Tutti gli aggiornamenti, news e risultati della settimana del campionato Aics, li puoi trovare solo sulla pagina WEB Ufficiale.</Text>
        <TouchableOpacity style={styles.button} onPress={() => Linking.openURL(`http://${url}`)}>
          <Text style={styles.buttonText}>{url}</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}; 

export default Info;