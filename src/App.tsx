import React from 'react';
import {
  Image,
} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './screen/Home';
import DetailsScreen from './screen/Details';
import {RootStackParamList} from './types';


const headerTitle = (): React.ReactElement => <Image source={require('./assets/logo.png')} style={{width: 150, height: 18}} />;

const Stack = createNativeStackNavigator<RootStackParamList>();

function App(): React.JSX.Element {
  return <NavigationContainer>
    <Stack.Navigator initialRouteName="Home" screenOptions={{
      headerStyle: {
        backgroundColor: '#0B1E32',
      },
      headerTintColor: '#fff',
    }}>
      <Stack.Screen name="Home" component={HomeScreen} options={{headerTitle}} />
      <Stack.Screen name="Details" component={DetailsScreen} options={{headerTitle}} />
    </Stack.Navigator>
  </NavigationContainer>;
}

export default App;
