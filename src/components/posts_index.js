import React, { Component } from 'react';
import { connect } from 'react-redux';
//import { bindActionCreators } from 'redux';
import { fetchPosts } from '../actions/index';
import { Link } from 'react-router';

class PostsIndex extends Component {
	componentWillMount() {
		//console.log('this would be a good time to call an action creator to fetch posts');
		this.props.fetchPosts();
	}

	render() {
		return (
			<div>
				<div className="text-xs-right">
					<Link to="/posts/new" className="btn btn-primary">
						Add a Post
					</Link>
				</div>
				List of blog posts
			</div>
		);
	}
}

/*
function mapDispatchToProps(dispatch) {
	return bindActionCreators({ fetchPosts }, dispatch);
}

export default connect(null, mapDispatchToProps)(PostsIndex);
*/

//export default connect(null, {fetchPosts: fetchPosts})(PostsIndex);



export default connect(null, {fetchPosts})(PostsIndex);

