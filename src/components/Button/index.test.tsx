import 'react-native';
import React from 'react';
import Button from './index';

import {render, screen} from '@testing-library/react-native';
import {fireEvent} from '@testing-library/react-native';


describe('Button', () => {
    it('renders correctly', () => {
        render(<Button>Test Button</Button>);
        expect(screen.toJSON()).toMatchSnapshot();
    });

    it('displays the correct text', () => {
        render(<Button>Test Button</Button>);
        expect(screen.getByText('Test Button')).toBeTruthy();
    });

    it('handles press events', () => {
        const mockOnPress = jest.fn();
        render(<Button onPress={mockOnPress}>Test Button</Button>);
        fireEvent.press(screen.getByText('Test Button'));
        expect(mockOnPress).toHaveBeenCalled();
    });
});
