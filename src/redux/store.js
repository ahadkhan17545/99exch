import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import rootReducer from './root-reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['userbal', 'userInfo', 'data', 'events', 'news', 'bets', 'eventData', 'fancyData', 'casinoResults', 'casinoCards', 'paymentMethods'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
        // Optionally ignore these paths in the state
        ignoredPaths: ['_persist'],
      },
    }),
});

export const persistor = persistStore(store);

export { store };
