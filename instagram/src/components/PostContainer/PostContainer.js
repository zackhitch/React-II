import React from 'react';

import './PostContainer.css';

import CommentSection from '../CommentSection/CommentSection';

function PostContainer(props) {
	const post = props.post;
	return (
		<div className="PostContainer">
			<div className="PostContainer__header">
				<img src={post.thumbnailUrl} />
				<h3 className="PostContainer__username">{post.username}</h3>
			</div>

			<div className="PostContainer__image">
				<img src={post.imageUrl} />
			</div>

			<div className="PostContainer__body">
				<div className="PostContainer__indications">
					<h3 className="PostContainer__likes">{post.likes} likes</h3>
				</div>

				<CommentSection comments={post.comments} timestamp={post.timestamp} />
			</div>

		</div>
	);
};

export default PostContainer;