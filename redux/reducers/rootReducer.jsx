import counterReducer from './counterReducer';
import blogsReducer from './blogsReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    counter: counterReducer,
    blogs: blogsReducer
});

export default rootReducer;