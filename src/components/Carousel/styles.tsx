import {
    Text,
    Pressable,
    Image,
    View,
} from 'react-native';
import styled from 'styled-components';

const RADIUS = '16px';

const ItemTitleWrapper = styled(View) <{borderColor?: string;}>`
    background-color: rgba(0,0,0,0.5);
    border-bottom-color: ${props => props.borderColor ? props.borderColor : '#0B1E32'};
    border-bottom-width: 3px;
    position: absolute;
    left: 0;
    z-index: 2;
    width: 100%;
    text-align: center;
`;
const CarouselTitle = styled(Text)`
    font-size: 16px;
    color: white;
    font-weight: bold;
    font-style: italic;
    padding-left: 8px;
    padding-right: 8px;
`;
const ItemTitle = styled(CarouselTitle)`
    font-size: 16px;
    color: #fff;
    padding-top: 8px;
    padding-bottom: 8px;
    overflow: hidden;
    text-align: center;
`;
const EmptyDataText = styled(Text)`
    font-size: 12px;
    font-weight: bold;
    font-style: italic;
    color: white;

`;
const EmptyData = styled(View)`
    padding: 16px;
    background-color: rgba(0,0,0,0.5);
    margin:  16px;
    border-radius: ${RADIUS};
    
`;
const StyledShadow = styled(View) <{isDark?: boolean;}>`
    border-radius: ${RADIUS};
    margin: 10px;
    background-color: rgba(0,0,0,0.5);
    background-color: #0B1E32;
    shadow-color: ${props => !props.isDark ? '#000' : '#CCC'};
    shadow-offset: {
        width: 0;
        height: 3,
    };
    shadow-opacity: 0.27;
    shadow-radius: 4.65px;
    elevation: 4;
`;
const CarouselItem = styled(Pressable)`
    border-style: "solid";
    border-width: 1px;
    width: 200px; 
    height: 350px;
    overflow: hidden;
    position: relative;
    border-radius: ${RADIUS};
`;
const StyledImage = styled(Image)`
    border-radius: 8px; 
    resize-mode: cover;
    width: 200px;
    height: 350px;
`;
export {
    ItemTitle,
    CarouselTitle,
    CarouselItem,
    StyledShadow,
    StyledImage,
    EmptyData,
    ItemTitleWrapper,
    EmptyDataText,
};
