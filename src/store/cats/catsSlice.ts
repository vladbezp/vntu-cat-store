import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Cat {
    id: string;
    name: string;
    age: number;
    breed: string;
    description: string;
    imageUrls: string[];
    tags: string[];
}

interface CatsState {
    cats: Cat[];
}

const initialState: CatsState = {
    cats: [],
};

export const catsSlice = createSlice({
    name: 'cats',
    initialState,
    reducers: {
        setCats: (state, action: PayloadAction<Cat[]>) => {
            state.cats = action.payload;
        },
    },
});

export const { setCats } = catsSlice.actions;

export default catsSlice.reducer;
