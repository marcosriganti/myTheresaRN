import {configureStore} from '@reduxjs/toolkit';
import {setupListeners} from '@reduxjs/toolkit/query/react';
import {movieApi} from './services/movies';
import {watchlistSlice} from './services/watchlist';
export const store = configureStore({
    reducer: {
        // Add the generated reducer as a specific top-level slice
        [movieApi.reducerPath]: movieApi.reducer,
        watchlist: watchlistSlice.reducer,

    },
    // Adding the api middleware enables caching, invalidation, polling,
    // and other useful features of `rtk-query`.
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(movieApi.middleware),
});

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
