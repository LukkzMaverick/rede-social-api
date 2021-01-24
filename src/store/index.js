import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import multi from "redux-multi";

import { reducer as toastrReducer } from "react-redux-toastr";

import SignReducer from "./Sign/sign.reducer";
import PostReducer from "./Post/post.reducer";
import UserReducer from "./User/user.reducer";

// modularizações dos reduces
const reducers = combineReducers({
  auth: SignReducer,
  post: PostReducer,
  user: UserReducer,
  toastr: toastrReducer, // <- Mounted at toastr.
});

// middlewares de confifurações do projeto
const middleware = [thunk, multi];

// compose que junta os middlewares e ferramentas de debug
const compose = composeWithDevTools(applyMiddleware(...middleware));

// criação da store
const store = createStore(reducers, compose);

export default store;

// ---------------------------
