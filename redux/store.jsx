import { applyMiddleware, createStore } from 'redux'
import { createWrapper } from 'next-redux-wrapper'
import rootReducer from './reducers/rootReducer';
import logger from 'redux-logger';
import thunkMiddleware from "redux-thunk";
import createSagaMiddleware from 'redux-saga';

const bindMiddleware = (middleware) => {
    if (process.env.NODE_ENV !== "production") {
        const { composeWithDevTools } = require("redux-devtools-extension");
        return composeWithDevTools(applyMiddleware(...middleware));
    }
    return applyMiddleware(...middleware);
};

const makeStore = ({ isServer }) => {
    if (isServer) {
        //If it's on server side, create a store
        return createStore(rootReducer, bindMiddleware([thunkMiddleware, logger]));
    } else {
        //If it's on client side, create a store which will persist
        const { persistStore, persistReducer, autoRehydrate } = require("redux-persist");
        const storage = require("redux-persist/lib/storage").default;

        const persistConfig = {
            key: "nextjs",
            whitelist: ["blogs", "counter"], // only counter will be persisted, add other reducers if needed
            storage, // if needed, use a safer storage
        };

        const persistedReducer = persistReducer(persistConfig, rootReducer); // Create a new reducer with our existing reducer

        const store = createStore(
            persistedReducer,
            {},
            bindMiddleware([thunkMiddleware, logger])
        ); // Creating the store again

        store.__persistor = persistStore(store); // This creates a persistor object & push that persisted object to .__persistor, so that we can avail the persistability feature

        return store;
    }
};

export const wrapper = createWrapper(makeStore, { debug: true })