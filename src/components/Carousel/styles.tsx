import {
    Text,
    Pressable,
    View
} from 'react-native';
import styled from 'styled-components';
import {
    Colors,
} from 'react-native/Libraries/NewAppScreen';

const CarouselTitle = styled(Text) <{isDark?: boolean;}>`
    font-size: 24px;
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
    top: 0;
    left: 0;
    color: #fff;
    text-shadow: 1px 1px 1px rgba(0,0,0,0.5);
    background-color: rgba(0,0,0,0.5);
    padding-top: 8px;
    padding-bottom: 8px;
    border-radius: 8px;
    overflow: hidden;
    z-index: 2;
    width: 100%;
`;
const StyledShadow = styled(View)`
    border-radius: 8px;
    margin: 10px;
    shadow-color: ${props => !props.isDark ? '#000' : '#CCC'};
    shadow-offset: {
        width: 0;
        height: 3,
    };
    shadow-opacity: 0.27;
    shadow-radius: 4.65px;
    elevation: 4;
`;
const CarouselItem = styled(Pressable) <{isDark?: boolean;}>`
    background-color: ${props => !props.isDark ? Colors.lighter : Colors.darker};
    border-color: rgba(255,255,255, 0.1);
    border-style: "solid";
    border-width: 1px;
    width: 200px; 
    height: 350px;
    overflow: hidden;
    position: relative;
    border-radius: 8px;
`;

export {
    ItemTitle,
    CarouselTitle,
    CarouselItem,
    StyledShadow
};