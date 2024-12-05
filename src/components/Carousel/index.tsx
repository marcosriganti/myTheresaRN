import React from 'react';
import {
    ScrollView,
    useColorScheme,
    View,
} from 'react-native';
import {CarouselItem, CarouselTitle, ItemTitle, StyledShadow, StyledImage, EmptyData, ItemTitleWrapper, EmptyDataText} from './styles';

import {Record, Category} from '../../types';

interface CarouselProps {
    title: string;
    data: Record[];
    category?: Category;
    onPress: (item: Record, category: Category) => void;
}

const Carousel = ({title, data, category, onPress}: CarouselProps) => {
    const isDarkMode = useColorScheme() === 'dark';
    return <View>
        <CarouselTitle>{title}</CarouselTitle>
        <View>
            {data.length === 0 && <EmptyData><EmptyDataText>No films to display in here</EmptyDataText></EmptyData>}
            <ScrollView horizontal={true}>
                {data.map((item) => {
                    return <StyledShadow isDark={isDarkMode} key={`item-${item.id}`}>
                        <CarouselItem key={item.id} onPress={() => category && onPress(item, category)}>
                            <ItemTitleWrapper borderColor={category?.backgroundColor}><ItemTitle>{item.name || item.original_title}</ItemTitle></ItemTitleWrapper>
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
export const Skeleton = (props: {title: string;}) => {
    return <View>
        <CarouselTitle>{props.title}</CarouselTitle>
        <View>
            <ScrollView horizontal={true}>
                {[1, 2, 3, 4, 5].map((i) => {
                    return <StyledShadow key={`item${i}`} isDark={false}>
                        <CarouselItem>
                            <ItemTitle>loading...</ItemTitle>
                            {/* something */}
                        </CarouselItem>
                    </StyledShadow>;
                })}
            </ScrollView>
        </View>
    </View>;
};
export default Carousel;
