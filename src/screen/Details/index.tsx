
import React from 'react';

import {
    Colors,
} from 'react-native/Libraries/NewAppScreen';
import {
    View,
    Text,
    SafeAreaView,
    useColorScheme,
    ScrollView,
    Image,
} from 'react-native';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../types';
import type {RouteProp} from '@react-navigation/native';
import styled from 'styled-components';

type DetailsScreenRouteProp = RouteProp<RootStackParamList, 'Details'>;
type DetailsScreenNavigationProps = NativeStackNavigationProp<
    RootStackParamList,
    'Details'
>;
type Props = {navigation: DetailsScreenNavigationProps; route: DetailsScreenRouteProp;};


const StyledHeaderWrapper = styled(View)`
    background-color: pink;
    width: auto;
    display: flex;
    
`;
const StyledHeader = styled(Text)`
    font-size: 18px;
`;

const Content = styled(View)`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 16px;
    flex: 3;
`;
const StyledImage = styled(Image)`
    flex: 2;
    border: 1px solid red;
    width: 100%;
    height: 200px;
    border-radius: 8px;
    resize-mode: contain;
`;


const DetailsScreen = (props: Props) => {
    const record = props.route.params;
    const {name, original_title, poster_path} = record;
    const isDarkMode = useColorScheme() === 'dark';
    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
        paddingVertical: 16
    };

    return <SafeAreaView style={backgroundStyle}>
        <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={backgroundStyle}>
            <View>
                <StyledHeaderWrapper>
                    <StyledHeader>{name || original_title}</StyledHeader>
                </StyledHeaderWrapper>
                <Content>
                    {/* <View> */}
                    <StyledImage source={{
                        uri: `https://image.tmdb.org/t/p/w500${poster_path}`,
                    }} />
                    {/* </View> */}
                    <View style={{flex: 1}}>

                        <Text>Add to fav</Text>
                        <Text>
                            Movie info
                        </Text>

                    </View>


                </Content>
                <View>
                    <Text>More text </Text>
                </View>

            </View>
        </ScrollView>
    </SafeAreaView>;
};

export default DetailsScreen;