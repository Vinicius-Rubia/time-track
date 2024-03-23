import { combineReducers, configureStore } from "@reduxjs/toolkit";
import loaderSlice from "./loaderSlice";

const combinedReducer = combineReducers({
  loaderModel: loaderSlice,
});

const rootReducer = (state: any, action: any) => {
  return combinedReducer(state, action);
};

export default configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});