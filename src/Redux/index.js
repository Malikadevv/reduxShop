import {createStore} from "redux";
import {Reducer} from "./Reduser";
import {composeWithDevTools} from "redux-devtools-extension";


export  const store = createStore(Reducer, composeWithDevTools())