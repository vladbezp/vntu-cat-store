import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface NavigationState {
    activeKey: string;
}

const initialState: NavigationState = {
    activeKey: '1',
};

const navigationSlice = createSlice({
    name: 'navigation',
    initialState,
    reducers: {
        setActiveKey: (state, action: PayloadAction<string>) => {
            state.activeKey = action.payload;
        },
    },
});

export const { setActiveKey } = navigationSlice.actions;

export default navigationSlice.reducer;
