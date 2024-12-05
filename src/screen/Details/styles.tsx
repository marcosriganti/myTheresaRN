import {
    View,
    Text,
    Image,
} from 'react-native';

import styled from 'styled-components';
import {fontFamilies} from '../../constants/fonts';

const StyledHeaderWrapper = styled(View)`
    width: auto;
    display: flex;
    padding-left: 16px;
    padding-top: 8px;
    padding-bottom: 8px;
`;
const StyledHeader = styled(Text) <{color?: string, font?: string;}>`
    font-size: 24px;
    font-family: ${props => props.font ? props.font : fontFamilies.MONTSERRAT.normal};
    color: ${props => props.color ? props.color : '#FFF'};
`;
const Content = styled(View)`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 16px;
    flex: 3;
    gap: 16px;
`;
const SideContent = styled(View)`
    flex: 1; 
    gap: 16px
`;

const StyledImage = styled(Image)`
    flex: 2;
    width: 100%;
    height: 350px;
    border-radius: 8px;
    resize-mode: cover;
`;

const StyleCopy = styled(Text)`
    font-size: 14px;
    color: white;
    line-height: 20px;
`;

export {
    StyledHeaderWrapper,
    StyledHeader,
    Content,
    StyledImage,
    StyleCopy,
    SideContent,
};
