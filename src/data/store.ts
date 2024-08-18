import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { animeApi } from "./services/anime";
import componentsReducer from "./services/component.state";

const rootReducer = combineReducers({
  [animeApi.reducerPath]: animeApi.reducer,
  components: componentsReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      // adding the api middleware enables caching, invalidation, polling and other features of `rtk-query`
      getDefaultMiddleware().concat(animeApi.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
