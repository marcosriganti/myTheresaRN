
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
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../types';
import styled from 'styled-components';
import Button from '../../components/Button';

type Props = NativeStackScreenProps<RootStackParamList, 'Details'>;


const StyledHeaderWrapper = styled(View)`
    background-color: pink;
    width: auto;
    display: flex;
    padding-left: 16px;
    padding-top: 8px;
    padding-bottom: 8px;
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
    gap: 16px;
`;
const StyledImage = styled(Image)`
    flex: 2;
    width: 100%;
    height: 350px;
    border-radius: 8px;
    resize-mode: cover;
`;

const StyleCopy = styled(Text)`
    font-size: 14px;
    color: #333;
    line-height: 20px;
`;
const DetailsScreen = (props: Props) => {
    const record = props.route.params;
    const {name, original_title, poster_path, overview, release_date, vote_average} = record;
    const isDarkMode = useColorScheme() === 'dark';
    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
        paddingVertical: 16
    };
    const handleListPress = () => {

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
                    <StyledImage source={{
                        uri: `https://image.tmdb.org/t/p/w500${poster_path}`,
                    }} />
                    <View style={{flex: 1, gap: 16}}>

                        <StyleCopy>{`Release Date: ${release_date} \nRate: ${vote_average}/5`}</StyleCopy>
                        <Button onPress={handleListPress} type='primary' > Add to list</Button>

                    </View>



                </Content>
                <Content>

                    <StyleCopy>
                        {overview}
                    </StyleCopy>

                </Content>

            </View>
        </ScrollView >
    </SafeAreaView >;
};

export default DetailsScreen;