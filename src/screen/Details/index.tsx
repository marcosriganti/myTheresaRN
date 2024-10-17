
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {
    View,
    SafeAreaView,
    useColorScheme,
    ScrollView,
} from 'react-native';
import {selectWatchlist} from '../../services/watchlist';
import Button from '../../components/Button';
import {StyleCopy, StyledHeaderWrapper, StyledHeader, Content, StyledImage, SideContent} from './styles';
import {DetailsScreenProps} from './types';

const DetailsScreen = (props: DetailsScreenProps) => {
    const record = props.route.params;
    const {name, original_title, poster_path, overview, release_date, vote_average, id} = record;
    const dispatch = useDispatch();
    const isDarkMode = useColorScheme() === 'dark';
    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
        paddingVertical: 16,
    };

    const watchListData = useSelector(selectWatchlist);
    const inListData = watchListData.find(r => r.id === id);
    const label = inListData ? 'Remove' : 'Add';

    const handleListPress = () => {
        inListData ? dispatch({type: 'watchlist/removeRecord', payload: record}) : dispatch({type: 'watchlist/addRecord', payload: record});
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
                    <SideContent>
                        <StyleCopy>{`Release Date: ${release_date} \nRate: ${vote_average}/5`}</StyleCopy>
                        <Button onPress={handleListPress} type="primary">{label}</Button>
                    </SideContent>
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
