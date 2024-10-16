import {TMDB_API_KEY} from "@env";
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import type {Record} from '../components/Carousel/types';

const URL = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';

interface queryResult {
    "page": number,
    "results": Record[],
    "total_pages": number,
    "total_results": number;
}
// const REACT_APP_TMDB_API_KEY = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMzMyZWE5OTk0MTgyY2FlNGY2MjkwMmFhOTk3MGQ0NiIsIm5iZiI6MTcyOTExODE0MC4zNjI5NDksInN1YiI6IjY3MGNlMzBhNDExMWJlNGYwMjc1MGYzMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NvjTXIuj5WpzYRoJ9lkpZmJV3ONMDAtH89PgqeYAmf8';

// Define a service using a base URL and expected endpoints
export const movieApi = createApi({
    reducerPath: 'movieApi',
    baseQuery: fetchBaseQuery({
        baseUrl: URL, headers: {
            "accept": 'application/json',
            "Authorization": `Bearer ${TMDB_API_KEY}`
        }
    }),
    endpoints: (builder) => ({
        getMovieByCategory: builder.query<queryResult, string>({
            query: (categoryId) => `&with_genres=${categoryId}`,
        }),
    }),
});


export const {useGetMovieByCategoryQuery} = movieApi;