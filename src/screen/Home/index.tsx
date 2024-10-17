import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    useColorScheme,
    View,
    Text,
} from 'react-native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {
    Colors,
} from 'react-native/Libraries/NewAppScreen';
import styled from 'styled-components';

import Carousel from '../../components/Carousel';
import {useGetMovieByCategoryQuery} from '../../services/movies';

import {RootStackParamList, Category, Record} from '../../types';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const categories: Category[] = [
    {
        'id': 16,
        'name': 'Animation',
    },
    {
        'id': 878,
        'name': 'Science Fiction',
    },
    {
        'id': 53,
        'name': 'Thriller',
    },

];

const CarouselGrid = styled(View)`
  display: flex;
  gap: 24px;
  margin: 16px 0;
`;

const Movies = (props: {category: Category; handlePress: any;}) => {
    const {category, handlePress} = props;
    const {data: movies, error, isLoading} = useGetMovieByCategoryQuery(category.id.toString());
    if (isLoading) {
        return <Text>Loading movies for ${category.name}...</Text>;
    }
    if (movies?.results.length === 0 || !movies) {
        return <Text>No movies found for ${category.name}</Text>;
    }
    if (error) {
        return <Text>Error loading movies for ${category.name}: ${JSON.stringify(error)}</Text>;
    }
    return <Carousel
        title={`Films of ${category.name}`}
        data={movies.results}
        key={`category-${category.id}`}
        onPress={handlePress} />;
};

const HomeScreen = (props: Props) => {
    const {navigation} = props;
    const isDarkMode = useColorScheme() === 'dark';
    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
        paddingVertical: 16,
    };
    const handlePress = (record: Record) => navigation.navigate('Details', record);

    return (<SafeAreaView style={backgroundStyle}>
        <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={backgroundStyle}>
            <CarouselGrid>
                {/* Trending TV  */}
                {categories.map((category) => {
                    return <Movies category={category} handlePress={handlePress} />;
                })}
                {/* Watch list */}
                <Carousel
                    title={'Your Watch List'}
                    data={[]}
                    key={'watchlist'}
                    onPress={handlePress} />
            </CarouselGrid>
        </ScrollView>
    </SafeAreaView>);
};

export default HomeScreen;
