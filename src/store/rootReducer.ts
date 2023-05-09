import { combineReducers } from '@reduxjs/toolkit';
import catsReducer from './cats/catsSlice';
import navigationReducer from './navigation/navigationSlice';

const rootReducer = combineReducers({
    cats: catsReducer,
    navigation: navigationReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
