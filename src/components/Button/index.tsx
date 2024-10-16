import React from 'react';
import {
    Text,
    Pressable,
} from 'react-native';
import styled from 'styled-components';
import {ButtonType, ButtonProps} from './types';

const StyledButton = styled(Pressable) <{type?: ButtonType;}>`
    background-color:#1d2bb2;
    border-radius: 8px;
    padding: 8px;
`;
const StyledButtonText = styled(Text)`
    color: #fff;
    text-align: center;
`;

const Button = ({children, onPress, type = 'primary'}: ButtonProps) => {
    return <StyledButton onPress={onPress} type={type}><StyledButtonText>{children}</StyledButtonText></StyledButton>;
};


export default Button;