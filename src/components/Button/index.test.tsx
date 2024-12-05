import 'react-native';
import React from 'react';
import Button from './index';

import {render} from '@testing-library/react-native';
import {fireEvent} from '@testing-library/react-native';


describe('Button', () => {
    it('renders correctly', () => {
        const view = render(<Button>Test Button</Button>);
        expect(view.toJSON()).toMatchSnapshot();
    });

    it('displays the correct text', () => {
        const view = render(<Button>Test Button</Button>);
        expect(view.getByText('Test Button')).toBeTruthy();
    });

    it('handles press events', () => {
        const mockOnPress = jest.fn();
        const view = render(<Button onPress={mockOnPress}>Test Button</Button>);
        fireEvent.press(view.getByText('Test Button'));
        expect(mockOnPress).toHaveBeenCalled();
    });
});
