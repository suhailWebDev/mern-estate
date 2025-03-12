import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from "./user/userSlice";
import storage from "redux-persist/lib/storage"; // Corrected import
import { persistReducer } from "redux-persist"; // Correct import
import persistStore from "redux-persist/es/persistStore";

const rootReducer = combineReducers({ user: userReducer });

const persistConfig = {
  key: "root",
  storage,
  version: 1,
};

const persistedReducer = persistReducer(persistConfig, rootReducer); // Correct function usage

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
export default store;
