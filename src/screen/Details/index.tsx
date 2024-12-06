
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
    View,
    SafeAreaView,
    ScrollView,
    Dimensions,
} from 'react-native';
import {selectWishlist} from '../../services/wishlist';
import Button from '../../components/Button';
import {StyleCopy, StyledHeaderWrapper, StyledHeader, Content, StyledImage, SideContent} from './styles';
import {DetailsScreenProps} from './types';
import {hexToRgb} from '../../utils';
import {APP_BG_COLOR, DEFAULT_BG_COLOR, DEFAULT_TEXT_COLOR} from '../../constants/colors';

const DetailsScreen = (props: DetailsScreenProps) => {
    const {record, category} = props.route.params;
    const {name, original_title, poster_path, overview, release_date, vote_average, id} = record;
    const dispatch = useDispatch();
    const backgroundStyle = {
        backgroundColor: APP_BG_COLOR,
        paddingVertical: 16,
        borderTopWidth: 3,
        borderTopColor: category.backgroundColor,
        height: Dimensions.get('window').height,
    };

    const wishListData = useSelector(selectWishlist);
    const inListData = wishListData.find(r => r.id === id);


    const handleListPress = () => {
        inListData ? dispatch({type: 'wishlist/removeRecord', payload: record}) : dispatch({type: 'wishlist/addRecord', payload: record});
    };
    let label = 'Add';
    let buttonBg = category?.backgroundColor || DEFAULT_BG_COLOR;

    const color = category?.backgroundColor || DEFAULT_TEXT_COLOR;
    const font = category.fontFamily;

    if (inListData) {
        label = 'Remove';
        buttonBg = `rgb(${hexToRgb(category.backgroundColor || '#1d2bb2')?.map(n => n * 0.5)?.join(',')})`;
    }
    const rate = Math.round(vote_average * 100) / 100;


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
                        <StyleCopy>Rate: {rate}</StyleCopy>
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
