export interface Category {
    id: number;
    name: string;
    backgroundColor?: string;
    fontFamily?: string;
}
export type Record = {
    name?: string;
    backdrop_path: string;
    id: number | string;
    title: string;
    original_title: string;
    overview: string;
    poster_path: string;
    media_type: string;
    adult: boolean;
    popularity: number;
    release_date: string;
    video: boolean;
    original_language: string;
    genre_ids: number[];
    vote_average: number;
    vote_count: number;
};
export interface queryResult {
    'page': number,
    'results': Record[],
    'total_pages': number,
    'total_results': number;
}

export type RootStackParamList = {
    Home: undefined;
    Details: {
        record: Record,
        category: Category;
    };
};

export interface MoviesProps {
    category: Category;
    handlePress: (record: Record, category: Category) => void;
}
