import { FAILURE_BLOGS, REQUEST_BLOGS, SUCCESS_BLOGS } from '../actions/blogsActions';

const initialState = {
    data: [],
    error: null,
    loading: false
}

const blogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'persist/REHYDRATE': {
            const data = action.payload;
            if (data) {
                return {
                    ...state,
                    ...data.blogs
                }
            }
        }
        case REQUEST_BLOGS: {
            return {
                ...state,
                data: [],
                loading: true
            };
        }
        case SUCCESS_BLOGS: {
            const data = action.payload;
            return {
                ...state,
                data: data,
                loading: false
            };
        }
        case FAILURE_BLOGS: {
            const data = action.payload;
            return {
                ...state,
                data: [],
                loading: false
            };
        }
        default:
            return { ...state };
    }
};

export default blogsReducer;