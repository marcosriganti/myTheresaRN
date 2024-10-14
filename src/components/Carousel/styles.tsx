import {
    ScrollView,
    Text,
    Image,
    useColorScheme,
    View,
} from 'react-native';
import styled from 'styled-components';
import {
    Colors,
} from 'react-native/Libraries/NewAppScreen';

const CarouselTitle = styled(Text) <{isDark?: boolean;}>`
    font-size: 32px;
    color: ${props => !props.isDark ? Colors.dark : Colors.light};
    text-transform: uppercase;
    letter-spacing: -1px;
    font-weight: bold;
    font-style: italic;
    padding-left: 16px;
`;
const ItemTitle = styled(CarouselTitle)`
    font-size: 16px;
    position: absolute;
    bottom: 8px;
    left: 0;
    color: #fff;
    text-shadow: 1px 1px 1px rgba(0,0,0,0.5);
`;
const CarouselItem = styled(View) <{isDark?: boolean;}>`
    border-top-right-radius: 8px;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    background-color: ${props => !props.isDark ? Colors.lighter : Colors.darker};
    border-color: rgba(255,255,255, 0.1);
    border-style: "solid";
    border-width: 1px;
    width: 200px; 
    height: 200px;
    shadow-color: ${props => !props.isDark ? '#000' : '#CCC'};
    shadow-offset: {
        width: 0;
        height: 3,
    };
    shadow-opacity: 0.27;
    shadow-radius: 4.65px;
    elevation: 4;
    margin: 10px;
    position: relative;
`;

export {
    ItemTitle,
    CarouselTitle,
    CarouselItem
};