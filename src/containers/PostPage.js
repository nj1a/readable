import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { loadPost, loadCommentsOfPost, votePost, voteComment } from '../actions/index'
import Post from '../components/Post'
import Comment from '../components/Comment'
import * as types from '../utils/PropTypes'

class PostPage extends Component {
    static propTypes = {
        loadPost: PropTypes.func.isRequired,
        loadCommentsOfPost: PropTypes.func.isRequired,
        votePost: PropTypes.func.isRequired,
        voteComment: PropTypes.func.isRequired,
        id: PropTypes.string.isRequired,
        post: types.post,
        comments: types.comments.isRequired
    }

    // use partial application to generalize the vote handler
    handleVote = (type, id) => option => () => {
        type === 'post'
            ? this.props.votePost({ id, option })
            : this.props.voteComment({ id, option })
    }

    componentDidMount() {
        this.props.loadPost(this.props.id)
        this.props.loadCommentsOfPost(this.props.id)
    }

    render() {
        const { id, comments, post } = this.props
        const postProps = {
            post,
            handleVote: this.handleVote('post', id),
            loadingLabel: "Loading..."
        }
        
        return (
            <div>
                {postProps.post && <Post {...postProps} />}
                <h2>Comments</h2>
                {comments.map(comment => (
                    <div key={comment.id}>
                        <Comment comment={comment} loadingLabel='Loading...'
                            handleVote={this.handleVote('comment', comment.id)} />
                    </div>
                ))}
            </div>    
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    id: ownProps.match.params.id,
    post: state.entities.posts[ownProps.match.params.id],
    comments: Object.values(state.entities.comments)
        .filter(comment => comment.parentId === ownProps.match.params.id)
        .sort((a, b) => b.voteScore - a.voteScore)
})

export default connect(mapStateToProps, {
    loadPost,
    loadCommentsOfPost,
    votePost,
    voteComment
})(PostPage)
