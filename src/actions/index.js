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

export const POSTS_REQUEST = 'POSTS_REQUEST';
export const POSTS_SUCCESS = 'POSTS_SUCCESS';
export const POSTS_FAILURE = 'POSTS_FAILURE';

const fetchPostsOfCategory = (category) => ({
    [CALL_API]: {
        types: [POSTS_REQUEST, POSTS_SUCCESS, POSTS_FAILURE],
        endpoint: `${category}/posts`,
        schema: Schemas.POSTS
    }
});

export const loadPostsOfCategory = (category, requiredFields = []) => (dispatch, getState) => {
    const posts = getState().entities.posts[category]
    return (posts && requiredFields.every(key => posts.hasOwnProperty(key)))
        ? null
        : dispatch(fetchPostsOfCategory(category))
}

export const RESET_ERROR_MESSAGE = 'RESET_ERROR_MESSAGE';
export const resetErrorMessage = () => ({
    type: RESET_ERROR_MESSAGE
});
