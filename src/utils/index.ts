import {Category} from '../types';

export const categories: Category[] = [
    {
        'id': 16,
        'name': 'Animation',
        'backgroundColor': '#CC5200',
    },
    {
        'id': 878,
        'name': 'Science Fiction',
        'backgroundColor': '#597802',
    },
    {
        'id': 53,
        'name': 'Thriller',
        'backgroundColor': '#474647',
    },
];

export const hexToRgb = (hex: string): [number, number, number] | null => {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result?.map(n => parseInt(n, 16)).slice(1) as [number, number, number];
};

