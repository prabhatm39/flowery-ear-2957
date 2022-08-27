import { combineReducers, legacy_createStore, applyMiddleware, compose } from "redux";
import {reducer as AppReducer} from "./Redux/reducer";
import thunk from "redux-thunk";


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers({ AppReducer  });

const store = legacy_createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
);

export {store};