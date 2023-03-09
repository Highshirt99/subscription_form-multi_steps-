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
  } from 'redux-persist'

import storage from "redux-persist/lib/storage";

import gameReducer from "./gameSlice"


const persistConfig = {
    key: "root",
    version: 1,
    storage
}

// export const store = configureStore({
//     reducer: {
//         gameData: gameReducer
//     }
// })

const persistedReducer = persistReducer(persistConfig, gameReducer)
 
export const store = configureStore({
    reducer: {gameData:persistedReducer},
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
}

)

export let persistor = persistStore(store)