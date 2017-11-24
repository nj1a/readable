const api_root = 'http://localhost:3001'
const headers = { Authorization: 'ashtrg43sf' }
const bodyHeaders = { ...headers, 'Content-Type': 'application/json' };

export const getAllCategories = () => fetch(`${api_root}/categories`, { headers })

export const getPostsOfCategory = ({ category }) => fetch(`${api_root}/${category}/posts`, { headers })

export const getAllPosts = () => fetch(`${api_root}/posts`, { headers })

export const addPost = (post) =>
    fetch(`${api_root}/posts`, {
        method: 'POST',
        headers: bodyHeaders,
        body: JSON.stringify(post)
    })

export const getPost = ({ id }) => fetch(`${api_root}/posts/${id}`, { headers })

export const votePost = ({ id, option }) =>
    fetch(`${api_root}/posts/${id}`, {
        method: 'POST',
        headers: bodyHeaders,
        body: JSON.stringify({ option })
    })

export const editPost = ({ id, title, body }) =>
    fetch(`${api_root}/posts/${id}`, {
        method: 'PUT',
        headers: bodyHeaders,
        body: JSON.stringify({ title, body })
    })

export const deletePost = ({ id }) =>
    fetch(`${api_root}/posts/${id}`, {
        method: 'DELETE',
        headers
    })

export const getCommentsOfPost = ({ id }) => fetch(`${api_root}/posts/${id}/comments`, { headers })

export const addComment = (comment) =>
    fetch(`${api_root}/comments`, {
        method: 'POST',
        headers: bodyHeaders,
        body: JSON.stringify(comment)
    })

export const getComment = ({ id }) => fetch(`${api_root}/comments/${id}`, { headers })

export const voteComment = ({ id, option }) =>
    fetch(`${api_root}/comments/${id}`, {
        method: 'POST',
        headers: bodyHeaders,
        body: JSON.stringify({ option })
    })

export const editComment = ({ id, timestamp, body }) =>
    fetch(`${api_root}/comments/${id}`, {
        method: 'PUT',
        headers: bodyHeaders,
        body: JSON.stringify({ timestamp, body })
    })

export const deleteComment = ({ id }) =>
    fetch(`${api_root}/comments/${id}`, {
        method: 'DELETE',
        headers
    })
