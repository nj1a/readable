import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Button from 'material-ui-next/Button'

import { loadPost, loadCommentsOfPost, votePost, voteComment } from '../actions/index'
import Post from '../components/Post'
import Comment from '../components/Comment'

class PostPage extends Component {
    static propTypes = {
        loadPost: PropTypes.func.isRequired,
        loadCommentsOfPost: PropTypes.func.isRequired,
        votePost: PropTypes.func.isRequired,
        voteComment: PropTypes.func.isRequired,
        id: PropTypes.string.isRequired,
        post: PropTypes.PropTypes.shape({
            id: PropTypes.string.isRequired,
            timestamp: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            body: PropTypes.string.isRequired,
            author: PropTypes.string.isRequired,
            category: PropTypes.string.isRequired,
            voteScore: PropTypes.number.isRequired,
            commentCount: PropTypes.number.isRequired
        }).isRequired,
        comments: PropTypes.arrayOf(
            PropTypes.PropTypes.shape({
                id: PropTypes.string.isRequired,
                parentId: PropTypes.string.isRequired,
                timestamp: PropTypes.number.isRequired,
                body: PropTypes.string.isRequired,
                author: PropTypes.string.isRequired,
                voteScore: PropTypes.number.isRequired
            })
        ).isRequired
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
                <Button component={Link} to={`/posts/${id}/edit`}>Edit Post</Button>
                <Button component={Link} to={`/posts/${id}/delete`}>Delete Post</Button>
                <Button component={Link} to={`/posts/${id}/comments/add`}>Add Comment</Button>
                <h2>Comments</h2>
                {comments.map(comment => (
                    <div key={comment.id}>
                        <Comment comment={comment} loadingLabel='Loading...'
                            handleVote={this.handleVote('comment', comment.id)} />
                        <Button component={Link} to={`/comments/${comment.id}/edit`}>Edit Comment</Button>
                        <Button component={Link} to={`/comments/${comment.id}/delete`}>Delete Comment</Button>
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
