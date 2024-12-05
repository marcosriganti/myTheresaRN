import React from 'react';
import {useSelector} from 'react-redux';
import {
    SafeAreaView,
    ScrollView,
} from 'react-native';

import Carousel, {Skeleton} from '../../components/Carousel';
import {useGetMovieByCategoryQuery} from '../../services/movies';
import {selectWatchlist} from '../../services/watchlist';
import {
    RootStackParamList,
    MoviesProps,
    Record,
    Category,
} from '../../types';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {CarouselGrid, ErrorMessage} from './styles';
import {categories} from '../../utils';

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
    // getting the watchlist data
    const watchListData = useSelector(selectWatchlist);
    const backgroundStyle = {
        backgroundColor: '#0B1E32',
        paddingVertical: 16,
    };

    const handlePress = (record: Record, category: Category) => navigation.navigate('Details', {
        record,
        category,
    });

    return (<SafeAreaView style={backgroundStyle}>
        <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={backgroundStyle}>
            <CarouselGrid>
                {/* Each Carousel */}
                {categories.map((category) => {
                    return <Movies category={category} handlePress={handlePress} />;
                })}
                {/* Watch list */}
                <Carousel
                    title={'Your Watch List'}
                    data={watchListData}
                    key={'watchlist'}
                    category={{id: 0, name: 'Watch List', backgroundColor: '#1d2bb2'}}
                    onPress={handlePress} />
            </CarouselGrid>
        </ScrollView>
    </SafeAreaView>);
};

export default HomeScreen;
