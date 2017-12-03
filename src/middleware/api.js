import { normalize, schema } from 'normalizr'

const categorySchema = new schema.Entity('categories', {}, {idAttribute: 'name'})
const postSchema = new schema.Entity('posts')
const commentSchema = new schema.Entity('comments')

export const Schemas = {
    CATEGORY: categorySchema,
    CATEGORIES: { categories: [categorySchema] },
    POST: postSchema,
    POSTS: [postSchema],
    COMMENT: commentSchema,
    COMMENTS: [commentSchema]
}

export default store => next => async ({ types, call, payload = {}, schema, shouldCall = true }) => {
    if (!Array.isArray(types) || types.length !== 3) {
        throw new Error('Expected an array of three action types')
    }
    if (!types.every(type => typeof type === 'string')) {
        throw new Error('Expected action types to be strings')
    }
    if (typeof call !== 'function') {
        throw new Error('Expected the call to be a function')
    }
    if (!shouldCall) {
        return
    }

    const [requestType, successType, failureType] = types
    next({ payload, type: requestType, isLoading: true, })
    
    // Both the Promise and async/await approaches work. Use the latte for now.

    // return call(payload)
    //     .then(response =>
    //         response.json()
    //             .then(json =>
    //                 response.ok ? normalize(json, schema) : Promise.reject(json)))
    //     .then(response =>
    //         next(Object.assign({}, payload, {
    //             type: successType,
    //             response
    //         }))
    //     )
    //     .catch(error =>
    //         next(Object.assign({}, payload, {
    //             type: failureType,
    //             error: error.message || 'Something bad happened'
    //         }))
    //     )

    try {
        const response = await call(payload)
        const json = await response.json()
        if (response.ok) { 
            // sleep can be used to demo the progress bar
            // const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))
            // await sleep(2000)
            next({ payload, type: successType, response: normalize(json, schema), isLoading: false, })
        } else {
            throw new Error(json)
        }
    } catch (error) {
        next({ payload, type: failureType, error: error.message || 'Something bad happened', isLoading: false, })
    }
}


