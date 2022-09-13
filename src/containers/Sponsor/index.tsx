import React from 'react';
import {
    SafeAreaView, View,
  } from 'react-native';

import SponsorItem from '../../components/SponsorItem';

import json from '../../mock/mock.json';

  const Sponsor = () => {
  const { sponsorItems } = json;
    return (
      <SafeAreaView >
          {sponsorItems.map(item => <SponsorItem key={item.id} sponsorItems={item}/>)}
      </SafeAreaView>
    );
  };
  
  export default Sponsor;