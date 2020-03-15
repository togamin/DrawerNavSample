import React from 'react';
import { Text, View, Image, Button } from 'react-native';
import { styles } from '../styles/common';

export function PikachuScreen({navigation}){
  return(
    <View style={styles.container} >
        <Text style={styles.pokeName}>ピカチュウ</Text>
        <Image
          source={require('../../assets/pkt.png')}
          resizeMode='contain'
          style={{ width: 200, height: 200 }}
        />
    </View>
  );
}