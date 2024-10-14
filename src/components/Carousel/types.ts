export type Record = {
    name?: string;
    backdrop_path: string;
    id: number;
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

export interface CarouselProps {
    title: string;
    data: Record[];
}
