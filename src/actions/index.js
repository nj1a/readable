import isEmpty from 'lodash/isEmpty';

import { Schemas } from '../middleware/api';
import * as api from '../utils/api'

export const RESET_ERROR_MESSAGE = 'RESET_ERROR_MESSAGE';
export const resetErrorMessage = () => ({
    type: RESET_ERROR_MESSAGE
});

export const CATEGORIES_REQUEST = 'CATEGORIES_REQUEST';
export const CATEGORIES_SUCCESS = 'CATEGORIES_SUCCESS';
export const CATEGORIES_FAILURE = 'CATEGORIES_FAILURE';
 
export const loadCategories = () => (dispatch, getState) => {
    dispatch({
        types: [CATEGORIES_REQUEST, CATEGORIES_SUCCESS, CATEGORIES_FAILURE],
        call: api.getAllCategories,
        shouldCall: isEmpty(getState().entities.categories),
        schema: Schemas.CATEGORIES
    })
}

export const POSTS_OF_CATEGORY_REQUEST = 'POSTS_OF_CATEGORY_REQUEST';
export const POSTS_OF_CATEGORY_SUCCESS = 'POSTS_OF_CATEGORY_SUCCESS';
export const POSTS_OF_CATEGORY_FAILURE = 'POSTS_OF_CATEGORY_FAILURE';

export const loadPostsOfCategory = category => (dispatch, getState) => {
    dispatch({
        types: [POSTS_OF_CATEGORY_REQUEST, POSTS_OF_CATEGORY_SUCCESS, POSTS_OF_CATEGORY_FAILURE],
        call: api.getPostsOfCategory,
        shouldCall: isEmpty(getState().entities.categories),
        payload: { category },
        schema: Schemas.POSTS
    })
}

export const POSTS_REQUEST = 'POSTS_REQUEST';
export const POSTS_SUCCESS = 'POSTS_SUCCESS';
export const POSTS_FAILURE = 'POSTS_FAILURE';

export const loadPosts = () => (dispatch, getState) => {
    dispatch({
        types: [POSTS_REQUEST, POSTS_SUCCESS, POSTS_FAILURE],
        call: api.getAllPosts,
        shouldCall: isEmpty(getState().entities.posts),
        schema: Schemas.POSTS
    })
}

export const POST_REQUEST = 'POST_REQUEST';
export const POST_SUCCESS = 'POST_SUCCESS';
export const POST_FAILURE = 'POST_FAILURE';

export const loadPost = id => (dispatch, getState) =>
    dispatch({
        types: [POST_REQUEST, POST_SUCCESS, POST_FAILURE],
        call: api.getPost,
        shouldCall: !getState().entities.posts[id],
        payload: { id },
        schema: Schemas.POST
    })

export const COMMENTS_OF_POST_REQUEST = 'COMMENTS_OF_POST_REQUEST';
export const COMMENTS_OF_POST_SUCCESS = 'COMMENTS_OF_POST_SUCCESS';
export const COMMENTS_OF_POST_FAILURE = 'COMMENTS_OF_POST_FAILURE';

export const loadCommentsOfPost = id => (dispatch, getState) =>
    dispatch({
        types: [COMMENTS_OF_POST_REQUEST, COMMENTS_OF_POST_SUCCESS, COMMENTS_OF_POST_FAILURE],
        call: api.getCommentsOfPost,
        shouldCall: isEmpty(getState().entities.comments),
        payload: { id },
        schema: Schemas.COMMENTS
    })

export const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE';

export const addPost = post => dispatch =>
    dispatch({
        types: [ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE],
        call: api.addPost,
        payload: post
    })