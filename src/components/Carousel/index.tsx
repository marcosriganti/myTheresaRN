import React from 'react';
import {
    ScrollView,
    useColorScheme,
    View,
} from 'react-native';
import {CarouselItem, CarouselTitle, ItemTitle, StyledShadow, StyledImage} from './styles';

import {Record} from '../../types';

interface CarouselProps {
    title: string;
    data: Record[];
    onPress: (item: Record) => void;
}

const Carousel = ({title, data, onPress}: CarouselProps) => {
    const isDarkMode = useColorScheme() === 'dark';
    return <View>
        <CarouselTitle>{title}</CarouselTitle>
        <View>
            <ScrollView horizontal={true}>
                {data.map((item) => {
                    return <StyledShadow>
                        <CarouselItem isDark={isDarkMode} key={item.id} onPress={() => onPress(item)}>
                            <ItemTitle>{item.name || item.original_title}</ItemTitle>
                            <StyledImage source={{
                                uri: `https://image.tmdb.org/t/p/w300${item.poster_path}`,
                            }} />
                        </CarouselItem>
                    </StyledShadow>;
                })}
            </ScrollView>
        </View>
    </View >;
};

export default Carousel;
