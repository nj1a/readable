import PropTypes from 'prop-types'

export const comment = PropTypes.PropTypes.shape({
    id: PropTypes.string.isRequired,
    parentId: PropTypes.string.isRequired,
    timestamp: PropTypes.number.isRequired,
    body: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    voteScore: PropTypes.number.isRequired
})

export const comments = PropTypes.arrayOf(comment)

export const post = PropTypes.PropTypes.shape({
    id: PropTypes.string.isRequired,
    timestamp: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    voteScore: PropTypes.number.isRequired,
    commentCount: PropTypes.number.isRequired
})

export const posts = PropTypes.arrayOf(post)

export const category = PropTypes.shape({
    name: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
})

export const categories = PropTypes.arrayOf(category)
