import { normalize, schema } from 'normalizr';

const API_ROOT = 'http://localhost:3001'
const headers = { Authorization: 'ashtrg43sf' }

const callApi = (endpoint, schema) => {
    return fetch(`${API_ROOT}/${endpoint}`, { headers })
        .then(response => response.json().then(
            json => response.ok ? normalize(json, schema) : Promise.reject(json)))
};


const categorySchema = new schema.Entity('categories', {}, {idAttribute: 'name'})
const postSchema = new schema.Entity('posts');
const commentSchema = new schema.Entity('comments');

export const Schemas = {
    CATEGORY: categorySchema,
    CATEGORIES: { categories: [categorySchema] },
    POST: postSchema,
    POSTS: [postSchema],
    COMMENT: commentSchema,
    COMMENTS: [commentSchema]
};

export const CALL_API = 'Call API';

export default store => next => action => {
    const callAPI = action[CALL_API]

    if (typeof callAPI === 'undefined') {
        return next(action)
    }

    let { endpoint } = callAPI;
    const { schema, types } = callAPI;
    if (typeof endpoint === 'function') {
        endpoint = endpoint(store.getState())
    }

    if (typeof endpoint !== 'string') {
        throw new Error('Specify a string endpoint URL.');
    }
    if (!schema) {
        throw new Error('Specify one of the exported Schemas');
    }
    if (!Array.isArray(types) || types.length !== 3) {
        throw new Error('Expected an array of three action types');
    }
    if (!types.every(type => typeof type === 'string')) {
        throw new Error('Expected action types to be strings');
    }

    const actionWith = data => {
        const finalAction = Object.assign({}, action, data);
        delete finalAction[CALL_API];
        return finalAction;
    }

    const [requestType, successType, failureType] = types;
    next(actionWith({ type: requestType }));

    return callApi(endpoint, schema).then(
        response => next(actionWith({
            response,
            type: successType
        })),
        error => next(actionWith({
            type: failureType,
            error: error.message || 'Something bad happened'
        }))
    );
}


