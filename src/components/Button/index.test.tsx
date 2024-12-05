import 'react-native';
import React from 'react';
import Button from './index';

import {render} from '@testing-library/react-native';
import {fireEvent} from '@testing-library/react-native';


describe('Button', () => {
    it('renders correctly', () => {
        const {toJSON} = render(<Button>Test Button</Button>);
        expect(toJSON()).toMatchSnapshot();
    });

    it('displays the correct text', () => {
        const {getByText} = render(<Button>Test Button</Button>);
        expect(getByText('Test Button')).toBeTruthy();
    });

    it('handles press events', () => {
        const mockOnPress = jest.fn();
        const {getByText} = render(<Button onPress={mockOnPress}>Test Button</Button>);
        fireEvent.press(getByText('Test Button'));
        expect(mockOnPress).toHaveBeenCalled();
    });
});