import {
  legacy_createStore,
  applyMiddleware,
  combineReducers,
  compose,
} from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./auth/auth.reducer";
import { socialReducer } from "./social/social.reducer";
import { prodReducer } from "./products/ProdReducer";

const rootReducer = combineReducers({
  socialManager: socialReducer,
  authManager: authReducer,
  prodManager:prodReducer,
});

const composer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(
  rootReducer,
  composer(applyMiddleware(thunk))
);
