import 'react-native';
import React from 'react';
import Carousel from './index';
import {render, screen} from '@testing-library/react-native';
import {Record, Category} from '../../types';

describe('Carousel', () => {
    const mockData: Record[] = [
        {id: '1', name: 'Movie 1', original_title: 'Original Movie 1', poster_path: '/path1.jpg'},
        {id: '2', name: 'Movie 2', original_title: 'Original Movie 2', poster_path: '/path2.jpg'},
    ];

    const mockCategory: Category = {
        id: 1,
        name: 'Category 1',
        backgroundColor: '#FF0000',
    };

    const mockOnPress = jest.fn();

    it('renders correctly', () => {
        render(<Carousel title="Test Carousel" data={mockData} category={mockCategory} onPress={mockOnPress} />);
        expect(screen.toJSON()).toMatchSnapshot();
    });

    it('displays the title', () => {
        render(<Carousel title="Test Carousel" data={mockData} category={mockCategory} onPress={mockOnPress} />);
        expect(screen.getByText('Test Carousel')).toBeTruthy();
    });

    it('displays empty data text when data is empty', () => {
        render(<Carousel title="Test Carousel" data={[]} category={mockCategory} onPress={mockOnPress} />);
        expect(screen.getByText('No films to display in here')).toBeTruthy();
    });

    it('displays items when data is provided', () => {
        render(<Carousel title="Test Carousel" data={mockData} category={mockCategory} onPress={mockOnPress} />);
        expect(screen.getByText('Movie 1')).toBeTruthy();
        expect(screen.getByText('Movie 2')).toBeTruthy();
    });
});
