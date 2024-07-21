// store.js
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "../slice/userSlice";
import productReducer from "../slice/product";
import categoryReducer from "../slice/category";
import trailerReducer from "../slice/trailerSlice";
import commentReducer from "../slice/comment";
import cartReducer from "../slice/cart";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user", "cart"], // Chỉ lưu các slice này
};

const rootReducer = combineReducers({
  product: productReducer,
  user: userReducer,
  category: categoryReducer,
  trailer: trailerReducer,
  comment: commentReducer,
  cart: cartReducer,
});

// const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

// export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
