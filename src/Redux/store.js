import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import { thunk } from "redux-thunk";
import { authReducer } from "./Auth/auth.reducer";
import { ProductReducer } from "./Product/product.reducer";

const rootReducer = combineReducers({
  authReducer,
  ProductReducer,
});
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
