import { normalize, schema } from 'normalizr';

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

export default store => next => ({ types, call, payload = {}, schema, shouldCall = true }) => {
    if (!Array.isArray(types) || types.length !== 3) {
        throw new Error('Expected an array of three action types');
    }
    if (!types.every(type => typeof type === 'string')) {
        throw new Error('Expected action types to be strings');
    }
    if (typeof call !== 'function') {
        throw new Error('Expected the call to be a function');
    }
    if (!shouldCall) {
        return;
    }

    const [requestType, successType, failureType] = types;
    next(Object.assign({}, payload, {
        type: requestType
    }));

    return call(...payload)
        .then(response => response.json().then(
            json => response.ok ? normalize(json, schema) : Promise.reject(json)))
        .then(
        response => next(Object.assign({}, payload, {
            type: successType,
            response
        })),
        error => next(Object.assign({}, payload, {
            type: failureType,
            error: error.message || 'Something bad happened'
        }))
    );
}


