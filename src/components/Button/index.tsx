import React from 'react';
import {
    Text,
    Pressable,
} from 'react-native';
import styled from 'styled-components';
import {ButtonType, ButtonProps} from './types';

const StyledButton = styled(Pressable) <{type?: ButtonType;}>`
    background-color: #1d2bb2;
    border-radius: 8px;
    padding: 8px;
`;
const StyledButtonText = styled(Text)`
    color: #FFFFFF;
    text-align: center;
`;

const Button = ({children, type = 'primary', ...rest}: ButtonProps & {children: React.ReactNode | string;}) => {
    return <StyledButton type={type} {...rest}><StyledButtonText>{children}</StyledButtonText></StyledButton>;
};


export default Button;
