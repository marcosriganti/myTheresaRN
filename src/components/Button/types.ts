import {PressableProps} from "react-native";
type ButtonType = 'primary' | 'secondary' | 'tertiary';
interface ButtonProps extends PressableProps {
    type?: ButtonType;
}

export type {
    ButtonProps,
    ButtonType,
};
