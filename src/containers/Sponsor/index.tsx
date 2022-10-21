import React from 'react';
import { ScrollView } from 'react-native';
import globalStyles from '../../../src/globalStyles/globalStyles';

import SponsorItem from '../../components/SponsorItem';

import SPONSOR from './constants';

  const Sponsor = () => {
  const { sponsorItems } = SPONSOR;
  
    return (
      <ScrollView style={globalStyles.view}>
          {sponsorItems.map(item => <SponsorItem key={item.id} sponsorItems={item}/>)}
      </ScrollView>
    );
  };
  
  export default Sponsor;