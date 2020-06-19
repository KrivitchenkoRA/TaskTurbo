import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import AdsListScreen from '../pages/AdsListScreen';
import AdDetailScreen from '../pages/AdDetailScreen';

const Stack = createStackNavigator();

const MainStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="AdsListScreen" component={AdsListScreen} />
        <Stack.Screen name="AdDetailScreen" component={AdDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStack;
