import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import rootReducer, {RootState} from "./rootReducer";

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cats'],
};

const persistedReducer = persistReducer<RootState>(persistConfig, rootReducer);

export default persistedReducer;
