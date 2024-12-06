import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import type {RootState} from '../store';
import type {Record} from '../types';

const initialState: {list: Record[];} = {
    list: [],
};
export const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState,
    reducers: {
        addRecord: (state, action: PayloadAction<Record>) => {
            const record = action.payload;
            const inList = state.list.find((el) => el.id === record.id);
            if (!inList) {
                state.list.push(record);
            }
        },
        removeRecord: (state, action: PayloadAction<Record>) => {
            const record = action.payload;
            state.list = state.list.filter((el) => el.id !== record.id);
        },
    },
});
export const {addRecord, removeRecord} = wishlistSlice.actions;

export const selectWishlist = (state: RootState) => state.wishlist.list;
