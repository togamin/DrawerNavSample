import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { MimikyuScreen } from './src/screen/MimikyuScreen';
import { PikachuScreen } from './src/screen/PikachuScreen';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="ミミッキュ">
        <Drawer.Screen name="ミミッキュ" component={MimikyuScreen} />
        <Drawer.Screen name="ピカチュウ" component={PikachuScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
