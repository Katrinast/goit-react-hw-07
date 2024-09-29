import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer, FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER, } from 'redux-persist'

import storage from 'redux-persist/lib/storage'


import contactSlice from "./contactsSlice";
import filtersSlice from "./filtersSlice";

const persistConfig = {
  key: "contacts",
  storage,
  whitelist: ["items"],
}

const persistContactsReducer = persistReducer(persistConfig, contactSlice)



export const store = configureStore({
  reducer: {
    contacts: persistContactsReducer,
    filters: filtersSlice,
  },
   middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store);