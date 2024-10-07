import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { configureStore } from "@reduxjs/toolkit";
import { filtersReducer } from "./filters/slice";
import { contactsReducer } from "../redux/contacts/slice";
import authReduser from "./auth/slice";

const persistAuthConfig = {
  key: "user-token",
  storage,
  whitelist : ['token']
};

const persistedAuthReducer = persistReducer(persistAuthConfig, authReduser);

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filters: filtersReducer,
    auth: persistedAuthReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

const persistConfig = {
  key: "root",
  storage,
};