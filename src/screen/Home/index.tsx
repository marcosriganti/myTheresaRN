import React from 'react';
import {useSelector} from 'react-redux';
import {
    SafeAreaView,
    ScrollView,
} from 'react-native';

import Carousel, {Skeleton} from '../../components/Carousel';
import {useGetMovieByCategoryQuery} from '../../services/movies';
import {selectWishlist} from '../../services/wishlist';
import {
    RootStackParamList,
    MoviesProps,
    Record,
    Category,
} from '../../types';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {CarouselGrid, ErrorMessage} from './styles';
import {categories} from '../../constants/categories';
import {APP_BG_COLOR, DEFAULT_BG_COLOR, DEFAULT_TEXT_COLOR} from '../../constants/colors';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;


const Movies = (props: MoviesProps) => {
    const {category, handlePress} = props;
    // Query per category
    const {data: movies, error, isLoading} = useGetMovieByCategoryQuery(category.id.toString());
    if (isLoading) {
        return <Skeleton title={category.name} />;
    }
    if (movies?.results.length === 0 || !movies) {
        return <ErrorMessage>No movies found for {category.name}</ErrorMessage>;
    }
    if (error) {
        return <ErrorMessage>Error loading movies for {category.name}: {JSON.stringify(error)}</ErrorMessage>;
    }

    return <Carousel
        title={`Films of ${category.name}`}
        data={movies.results}
        key={`category-${category.id}`}
        category={category}
        onPress={handlePress} />;
};

const HomeScreen = (props: Props) => {
    const {navigation} = props;
    // getting the wishlist data
    const wishListData = useSelector(selectWishlist);

    const backgroundStyle = {
        backgroundColor: APP_BG_COLOR,
        paddingVertical: 16,
        borderTopWidth: 3,
        borderTopColor: DEFAULT_TEXT_COLOR,
    };

    const handlePress = (record: Record, category: Category) => navigation.navigate('Details', {
        record,
        category,
    });

    return (<SafeAreaView style={backgroundStyle}>
        <ScrollView
            contentInsetAdjustmentBehavior="automatic"
        >
            <CarouselGrid>
                {/* Each Carousel */}
                {categories.map((category) => {
                    return <Movies category={category} key={'movies' + category.id} handlePress={handlePress} />;
                })}
                {/* Wish list */}
                <Carousel
                    title={'Your Wish List'}
                    data={wishListData}
                    key={'wishlist'}
                    category={{id: 0, name: 'Wish List', backgroundColor: DEFAULT_BG_COLOR}}
                    onPress={handlePress} />
            </CarouselGrid>
        </ScrollView>
    </SafeAreaView>);
};

export default HomeScreen;
