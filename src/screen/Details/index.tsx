
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
    View,
    SafeAreaView,
    ScrollView,
    Dimensions,
} from 'react-native';
import {selectWatchlist} from '../../services/watchlist';
import Button from '../../components/Button';
import {StyleCopy, StyledHeaderWrapper, StyledHeader, Content, StyledImage, SideContent} from './styles';
import {DetailsScreenProps} from './types';
import {hexToRgb} from '../../utils';

const DetailsScreen = (props: DetailsScreenProps) => {
    const {record, category} = props.route.params;
    const {name, original_title, poster_path, overview, release_date, vote_average, id} = record;
    const dispatch = useDispatch();
    const backgroundStyle = {
        backgroundColor: '#0B1E32',
        paddingVertical: 16,
        borderTopWidth: 3,
        borderTopColor: category.backgroundColor,
        height: Dimensions.get('window').height,
    };

    const watchListData = useSelector(selectWatchlist);
    const inListData = watchListData.find(r => r.id === id);


    const handleListPress = () => {
        inListData ? dispatch({type: 'watchlist/removeRecord', payload: record}) : dispatch({type: 'watchlist/addRecord', payload: record});
    };
    let label = 'Add';
    let buttonBg = category?.backgroundColor || '#1d2bb2';

    const color = category?.backgroundColor || 'white';
    const font = category.fontFamily;
    if (inListData) {
        label = 'Remove';
        buttonBg = `rgb(${hexToRgb(category.backgroundColor || '#1d2bb2')?.map(n => n * 0.5)?.join(',')})`;
    }


    return <SafeAreaView style={backgroundStyle}>
        <ScrollView
            contentInsetAdjustmentBehavior="automatic"
        >
            <View>
                <StyledHeaderWrapper>
                    <StyledHeader color={color} font={font}>{name || original_title}</StyledHeader>
                </StyledHeaderWrapper>
                <Content>
                    <StyledImage source={{
                        uri: `https://image.tmdb.org/t/p/w500${poster_path}`,
                    }} />
                    <SideContent>
                        <StyleCopy>{`Release Date: ${release_date}`}</StyleCopy>
                        <StyleCopy>Rate: {Math.round(vote_average * 100) / 100}</StyleCopy>
                        <Button onPress={handleListPress} type="primary" style={{backgroundColor: buttonBg}}>{label}</Button>
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
