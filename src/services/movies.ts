import {TMDB_API_KEY, TMDB_API_URL} from '@env';
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {queryResult} from '../types';

const API_URL = `${TMDB_API_URL}discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`;

// Define a service using a base URL and expected endpoints
export const movieApi = createApi({
    reducerPath: 'movieApi',
    baseQuery: fetchBaseQuery({
        baseUrl: API_URL, headers: {
            'accept': 'application/json',
            'Authorization': `Bearer ${TMDB_API_KEY}`,
        },
    }),
    endpoints: (builder) => ({
        getMovieByCategory: builder.query<queryResult, string>({
            query: (categoryId) => `&with_genres=${categoryId}`,
        }),
    }),
});


export const {useGetMovieByCategoryQuery} = movieApi;
