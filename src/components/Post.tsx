import React from 'react';
import './Post.css';
import Avatar from '@material-ui/core/Avatar';
import IPost from '../models/Post.interface';


function Post(props: Partial<IPost>) {
    const { username, caption, imageUrl, imageAvatar } = props;
    return (
        <div className="post">
            <div className="post__header">
                <Avatar
                    className="post__avatar"
                    alt={username}
                    src={imageAvatar}
                />
                <h3>{username}</h3>
            </div>
            {/* Header -> Avatar -> Username */}
            <img className="post__image" src={imageUrl} />
            {/* Image */}
            <h4 className="post__text"><strong>{username}</strong> {caption}</h4>
            {/* Username + Caption */}
        </div>
    )
}

export default Post;