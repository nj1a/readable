import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import withStyles from 'material-ui/styles/withStyles'
import Typography from 'material-ui/Typography'

import { loadPost, loadCommentsOfPost, votePost, voteComment, deletePost } from '../actions/index'
import Post from '../components/Post'
import Comment from '../components/Comment'
import * as types from '../utils/PropTypes'

const styles = theme => ({
    margin: {
        margin: 10,
    },
})

class PostPage extends Component {
    static propTypes = {
        loadPost: PropTypes.func.isRequired,
        loadCommentsOfPost: PropTypes.func.isRequired,
        votePost: PropTypes.func.isRequired,
        voteComment: PropTypes.func.isRequired,
        id: PropTypes.string.isRequired,
        post: types.post,
        comments: types.comments.isRequired,
    }

    handleVote = (type, id) => option => () => {
        type === 'post'
            ? this.props.votePost({ id, option })
            : this.props.voteComment({ id, option })
    }

    handleDeletePost = async () => {
        const { deletePost, id, post, history } = this.props
        await deletePost(id)
        history.replace(`/${post.category}`)
    }

    componentDidMount() {
        this.props.loadPost(this.props.id)
        this.props.loadCommentsOfPost(this.props.id)
    }

    render() {
        const { id, comments, post, classes } = this.props
        const commentCount = comments.length
        return (
            <div className={classes.margin}>
                {post &&
                    <div className={classes.margin}>    
                    <Post post={post} handleVote={this.handleVote('post', id)} commentCount={commentCount} handleDeletePost={this.handleDeletePost}/>
                    </div>}
                <h2>Comments</h2>
                {commentCount
                    ? (comments.map(comment =>
                        <div key={comment.id} className={classes.margin}>
                            <Comment comment={comment} handleVote={this.handleVote('comment', comment.id)} />
                        </div>)
                    )
                    : (<Typography type="subheading">
                        Sorry there is no comment for this post. Do you want to be the first to add a comment?
                        </Typography>
                    )
                }
            </div>    
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    id: ownProps.match.params.id,
    post: state.entities.posts[ownProps.match.params.id],
    comments: Object.values(state.entities.comments)
        .filter(comment => !comment.deleted && comment.parentId === ownProps.match.params.id)
        .sort((a, b) => b.voteScore - a.voteScore)
})

export default withStyles(styles)(withRouter(connect(mapStateToProps, {
    loadPost,
    loadCommentsOfPost,
    votePost,
    voteComment,
    deletePost,
})(PostPage)))
