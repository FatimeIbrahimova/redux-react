import { createStore } from "redux";
import rootReducer from "./reducers";
// import { counterReducer } from "./reducers/counterReducer";

export const store =createStore(rootReducer)