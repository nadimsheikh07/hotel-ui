import { applyMiddleware, createStore } from 'redux'
import { createWrapper } from 'next-redux-wrapper'
import rootReducer from './reducers/rootReducer';
import thunkMiddleware from "redux-thunk";

const bindMiddleware = (middleware) => {
    if (process.env.NODE_ENV !== "production") {
        const { composeWithDevTools } = require("redux-devtools-extension");
        return composeWithDevTools(applyMiddleware(...middleware));
    }
    return applyMiddleware(...middleware);
}

export const makeStore = () => {
    return createStore(rootReducer, bindMiddleware([thunkMiddleware]));
}

export const wrapper = createWrapper(makeStore, { debug: true })