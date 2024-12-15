import { configureStore } from "@reduxjs/toolkit";

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
import { authReducer } from "./auth/slice";
import { contactsReducer } from "./contacts/slice";
import { filterReducer } from "./filter/slice";

const authPersistConfig = {
  key: "auth",
  version: 1,
  storage,
  whitelist: ["token"],
};
const contactsPersistConfig = {
  key: "contacts",
  version: 1,
  storage,
};
const filterPersistConfig = {
  key: "filter",
  version: 1,
  storage,
};

const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);
const persistedContactsReducer = persistReducer(
  contactsPersistConfig,
  contactsReducer
);
const persistedFilterReducer = persistReducer(
  filterPersistConfig,
  filterReducer
);

export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    contacts: persistedContactsReducer,
    filter: persistedFilterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
