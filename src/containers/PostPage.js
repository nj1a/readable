import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import withStyles from 'material-ui/styles/withStyles'
import Typography from 'material-ui/Typography'

import { loadPost, loadCommentsOfPost, votePost, voteComment } from '../actions/index'
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
        const { id, comments, post, classes } = this.props
        return (
            <div className={classes.margin}>
                {post &&
                    <div className={classes.margin}>    
                    <Post post={post} handleVote={this.handleVote('post', id)} loadingLabel="Loading..." />
                    </div>}
                <h2>Comments</h2>
                {comments.length
                    ? (comments.map(comment =>
                        <div key={comment.id} className={classes.margin}>
                            <Comment comment={comment} loadingLabel='Loading...'
                                handleVote={this.handleVote('comment', comment.id)} />
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
        .filter(comment => comment.parentId === ownProps.match.params.id)
        .sort((a, b) => b.voteScore - a.voteScore)
})

export default withStyles(styles)(connect(mapStateToProps, {
    loadPost,
    loadCommentsOfPost,
    votePost,
    voteComment
})(PostPage))
