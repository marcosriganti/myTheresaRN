type ButtonType = 'primary' | 'secondary' | 'tertiary';
interface ButtonProps {
    children: string;
    onPress: () => void;
    type: ButtonType;
}

export type {
    ButtonProps,
    ButtonType,
};