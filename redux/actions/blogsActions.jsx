import { apiConfig } from "../../utils/apiConfig";

//Action Types
export const REQUEST_BLOGS = "REQUEST_BLOGS";
export const SUCCESS_BLOGS = "SUCCESS_BLOGS";
export const FAILURE_BLOGS = "FAILURE_BLOGS";


//Action Creator
export const requestBlogs = () => dispatch => {
    dispatch({ type: REQUEST_BLOGS })
    apiConfig.get('/blogs').then(response => {
        if (response.status == 200) {
            dispatch({
                type: SUCCESS_BLOGS,
                payload: response.data
            })
        }
    }).catch((error) => {
        console.log('error', error)
        const { response } = error
        dispatch({
            type: SUCCESS_BLOGS,
            payload: response.data
        })
    })
};


