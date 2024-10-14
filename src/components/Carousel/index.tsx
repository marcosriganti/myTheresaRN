import React from 'react';
import {
    ScrollView,
    Image,
    useColorScheme,
    View,
} from 'react-native';
import {CarouselItem, CarouselTitle, ItemTitle} from './styles';
import {CarouselProps} from './types';

const Carousel = ({title, data, onPress}: CarouselProps) => {
    const isDarkMode = useColorScheme() === 'dark';
    return <View>
        <CarouselTitle>{title}</CarouselTitle>
        <View>
            <ScrollView horizontal={true}>
                {data.map((item) => {
                    return <CarouselItem isDark={isDarkMode} key={item.id} onPress={() => onPress(item)}>
                        <Image source={{
                            uri: `https://image.tmdb.org/t/p/w300${item.poster_path}`,
                        }} width={200} height={200} style={{borderRadius: 8, }} />
                        <ItemTitle>{item.name || item.original_title}</ItemTitle>
                    </CarouselItem>;
                })}
            </ScrollView>
        </View>
    </View >;
};

export default Carousel;