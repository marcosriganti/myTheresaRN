
import React from 'react';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {
    View,
    SafeAreaView,
    useColorScheme,
    ScrollView,
} from 'react-native';
import Button from '../../components/Button';
import {StyleCopy, StyledHeaderWrapper, StyledHeader, Content, StyledImage} from './styles';
import {DetailsScreenProps} from './types';

const DetailsScreen = (props: DetailsScreenProps) => {
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
        </ScrollView>
    </SafeAreaView>;
};

export default DetailsScreen;