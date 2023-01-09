import { createStore } from "redux";
import { CreateReducer } from "./CreateReducer";
import mainReducer from "./indexx";

export const store = createStore(mainReducer)