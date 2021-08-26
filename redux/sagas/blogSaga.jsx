import { put, takeEvery, takeLatest } from 'redux-saga/effects'
import { FAILURE_BLOGS, REQUEST_BLOGS, SUCCESS_BLOGS } from '../actions/blogsActions';


async function fetchAsync(func) {
    const response = await func();

    if (response.ok) {
        return await response.json();
    }

    throw new Error("Unexpected error!!!");
}

function* fetchBlog() {
    try {
        const blogs = yield fetchAsync(Api.getblogs);

        yield put({ type: SUCCESS_BLOGS, data: blogs });
    } catch (e) {
        yield put({ type: FAILURE_BLOGS, error: e.message });
    }
}

export function* blogsSaga() {
    // Allows concurrent fetches of blogs
    yield takeEvery(REQUEST_BLOGS, fetchBlog);

    // Does not allow concurrent fetches of blogs
    // yield takeLatest(REQUEST_BLOGS, fetchBlog);
}

export default blogsSaga;