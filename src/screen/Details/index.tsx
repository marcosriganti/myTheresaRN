
import React from 'react';
import {
    View,
    Text
} from 'react-native';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../types';


type DetailsScreenProps = NativeStackNavigationProp<
    RootStackParamList,
    'Details'
>;
const DetailsScreen = (props: DetailsScreenProps) => {
    console.log('props', props);
    return <View>
        <Text>Movie Screen</Text>
    </View>;
};

export default DetailsScreen;