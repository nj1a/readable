// import * as API from '../utils/api'
import { CALL_API, Schemas } from '../middleware/api';

export const CATEGORIES_REQUEST = 'CATEGORIES_REQUEST';
export const CATEGORIES_SUCCESS = 'CATEGORIES_SUCCESS';
export const CATEGORIES_FAILURE = 'CATEGORIES_FAILURE';

const fetchCategories = () => ({
    [CALL_API]: {
        types: [CATEGORIES_REQUEST, CATEGORIES_SUCCESS, CATEGORIES_FAILURE],
        endpoint: 'categories',
        schema: Schemas.CATEGORIES
    }
});
 
export const loadCategories = (requiredFields = []) => (dispatch, getState) => {
    const categories = getState().entities.categories
    return (categories && requiredFields.every(key => categories.hasOwnProperty(key)))
        ? null
        : dispatch(fetchCategories())
}

export const RESET_ERROR_MESSAGE = 'RESET_ERROR_MESSAGE';

export const resetErrorMessage = () => ({
    type: RESET_ERROR_MESSAGE
});
//     API.getAllCategories()
//         .then(categories => dispatch(getCategoriesSuccess(categories)))
//         .catch(error => {
//             throw (error);
//         });

// export const LOAD_POSTS_SUCCESS = 'LOAD_POSTS_SUCCESS'; 

// export const getPosts = () => (dispatch) =>
//     API.getAllPosts()
//         .then(posts => dispatch(getPostsSuccess(posts)))
//         .catch(error => {
//             throw (error);
//         });

// export const getCategoriesSuccess = (categories) => ({
//     type: actionTypes.LOAD_CATEGORIES_SUCCESS,
//     categories
// });

// export const getPostsSuccess = (posts) => ({
//     type: actionTypes.LOAD_POSTS_SUCCESS,
//     posts
// });
