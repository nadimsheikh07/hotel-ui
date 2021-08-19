//Action Types
export const REQUEST_BLOGS = "REQUEST_BLOGS";
export const SUCCESS_BLOGS = "SUCCESS_BLOGS";
export const FAILURE_BLOGS = "FAILURE_BLOGS";


//Action Creator
export const requestBlogs = () => {
    console.log('REQUEST_BLOGS-----')
    return {
        type: REQUEST_BLOGS
    }
};

export const failureBlogs = (data) => ({
    type: FAILURE_BLOGS,
    data
});

export const successBlogs = (data) => ({
    type: SUCCESS_BLOGS,
    data
});


