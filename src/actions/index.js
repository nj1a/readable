import isEmpty from 'lodash/isEmpty'

import { Schemas } from '../middleware/api'
import * as api from '../utils/api'

export const RESET_ERROR_MESSAGE = 'RESET_ERROR_MESSAGE'
export const resetErrorMessage = () => ({
    type: RESET_ERROR_MESSAGE
})

export const GET_CATEGORIES_REQUEST = 'GET_CATEGORIES_REQUEST'
export const GET_CATEGORIES_SUCCESS = 'GET_CATEGORIES_SUCCESS'
export const GET_CATEGORIES_FAILURE = 'GET_CATEGORIES_FAILURE'
 
export const loadCategories = () => (dispatch, getState) => {
    dispatch({
        types: [GET_CATEGORIES_REQUEST, GET_CATEGORIES_SUCCESS, GET_CATEGORIES_FAILURE],
        call: api.getAllCategories,
        shouldCall: isEmpty(getState().entities.categories),
        schema: Schemas.CATEGORIES
    })
}

export const GET_POSTS_OF_CATEGORY_REQUEST = 'GET_POSTS_OF_CATEGORY_REQUEST'
export const GET_POSTS_OF_CATEGORY_SUCCESS = 'GET_POSTS_OF_CATEGORY_SUCCESS'
export const GET_POSTS_OF_CATEGORY_FAILURE = 'GET_POSTS_OF_CATEGORY_FAILURE'

export const loadPostsOfCategory = category => (dispatch, getState) => {
    dispatch({
        types: [GET_POSTS_OF_CATEGORY_REQUEST, GET_POSTS_OF_CATEGORY_SUCCESS, GET_POSTS_OF_CATEGORY_FAILURE],
        call: api.getPostsOfCategory,
        shouldCall: isEmpty(getState().entities.categories),
        payload: { category },
        schema: Schemas.POSTS
    })
}

export const GET_POSTS_REQUEST = 'GET_POSTS_REQUEST'
export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS'
export const GET_POSTS_FAILURE = 'GET_POSTS_FAILURE'

export const loadPosts = () => (dispatch, getState) =>
    dispatch({
        types: [GET_POSTS_REQUEST, GET_POSTS_SUCCESS, GET_POSTS_FAILURE],
        call: api.getAllPosts,
        shouldCall: isEmpty(getState().entities.posts),
        schema: Schemas.POSTS
    })

export const GET_POST_REQUEST = 'GET_POST_REQUEST'
export const GET_POST_SUCCESS = 'GET_POST_SUCCESS'
export const GET_POST_FAILURE = 'GET_POST_FAILURE'

export const loadPost = id => (dispatch, getState) =>
    dispatch({
        types: [GET_POST_REQUEST, GET_POST_SUCCESS, GET_POST_FAILURE],
        call: api.getPost,
        shouldCall: !getState().entities.posts[id],
        payload: { id },
        schema: Schemas.POST
    })

export const GET_COMMENTS_OF_POST_REQUEST = 'GET_COMMENTS_OF_POST_REQUEST'
export const GET_COMMENTS_OF_POST_SUCCESS = 'GET_COMMENTS_OF_POST_SUCCESS'
export const GET_COMMENTS_OF_POST_FAILURE = 'COMMENTS_OF_POST_FAILURE'

export const loadCommentsOfPost = id => (dispatch, getState) =>
    dispatch({
        types: [GET_COMMENTS_OF_POST_REQUEST, GET_COMMENTS_OF_POST_SUCCESS, GET_COMMENTS_OF_POST_FAILURE],
        call: api.getCommentsOfPost,
        shouldCall: isEmpty(getState().entities.comments),
        payload: { id },
        schema: Schemas.COMMENTS
    })

export const ADD_POST_REQUEST = 'ADD_POST_REQUEST'
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS'
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE'

export const addPost = post => dispatch =>
    dispatch({
        types: [ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE],
        call: api.addPost,
        payload: post,
        schema: Schemas.POST
    })

export const EDIT_POST_REQUEST = 'EDIT_POST_REQUEST'
export const EDIT_POST_SUCCESS = 'EDIT_POST_SUCCESS'
export const EDIT_POST_FAILURE = 'EDIT_POST_FAILURE'

export const editPost = changedPost => dispatch =>
    dispatch({
        types: [EDIT_POST_REQUEST, EDIT_POST_SUCCESS, EDIT_POST_FAILURE],
        call: api.editPost,
        payload: changedPost,
        schema: Schemas.POST
    })

export const VOTE_POST_REQUEST = 'VOTE_POST_REQUEST'
export const VOTE_POST_SUCCESS = 'VOTE_POST_SUCCESS'
export const VOTE_POST_FAILURE = 'VOTE_POST_FAILURE'

export const votePost = ({id, option}) => dispatch =>
    dispatch({
        types: [VOTE_POST_REQUEST, VOTE_POST_SUCCESS, VOTE_POST_FAILURE],
        call: api.votePost,
        payload: { id, option },
        schema: Schemas.POST
    })

export const DELETE_POST_REQUEST = 'DELETE_POST_REQUEST'
export const DELETE_POST_SUCCESS = 'DELETE_POST_SUCCESS'
export const DELETE_POST_FAILURE = 'DELETE_POST_FAILURE'

export const deletePost = id => dispatch =>
    dispatch({
        types: [DELETE_POST_REQUEST, DELETE_POST_SUCCESS, DELETE_POST_FAILURE],
        call: api.deletePost,
        payload: { id },
        schema: Schemas.POST
    })

export const ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST'
export const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS'
export const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE'

export const addComment = comment => dispatch =>
    dispatch({
        types: [ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE],
        call: api.addComment,
        payload: comment,
        schema: Schemas.COMMENT
    })

export const EDIT_COMMENT_REQUEST = 'EDIT_COMMENT_REQUEST'
export const EDIT_COMMENT_SUCCESS = 'EDIT_COMMENT_SUCCESS'
export const EDIT_COMMENT_FAILURE = 'EDIT_COMMENT_FAILURE'

export const editComment = changedComment => dispatch =>
    dispatch({
        types: [EDIT_COMMENT_REQUEST, EDIT_COMMENT_SUCCESS, EDIT_COMMENT_FAILURE],
        call: api.editComment,
        payload: changedComment,
        schema: Schemas.COMMENT
    })

export const DELETE_COMMENT_REQUEST = 'DELETE_COMMENT_REQUEST'
export const DELETE_COMMENT_SUCCESS = 'DELETE_COMMENT_SUCCESS'
export const DELETE_COMMENT_FAILURE = 'DELETE_COMMENT_FAILURE'

export const deleteComment = id => dispatch =>
    dispatch({
        types: [DELETE_COMMENT_REQUEST, DELETE_COMMENT_SUCCESS, DELETE_COMMENT_FAILURE],
        call: api.deleteComment,
        payload: { id },
        schema: Schemas.COMMENT
    })

export const VOTE_COMMENT_REQUEST = 'VOTE_COMMENT_REQUEST'
export const VOTE_COMMENT_SUCCESS = 'VOTE_COMMENT_SUCCESS'
export const VOTE_COMMENT_FAILURE = 'VOTE_COMMENT_FAILURE'

export const voteComment = ({ id, option }) => dispatch =>
    dispatch({
        types: [VOTE_COMMENT_REQUEST, VOTE_COMMENT_SUCCESS, VOTE_COMMENT_FAILURE],
        call: api.voteComment,
        payload: { id, option },
        schema: Schemas.COMMENT
    })
