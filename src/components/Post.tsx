import React from 'react';
import './Post.css';

function Post() {
    return (
        <div className="post">
            <h3>Username</h3>
            {/* Header -> Avatar -> Username */}
            <img className="post__image" src="https://picsum.photos/1000" />
            {/* Image */}
            <h4 className="post__text"><strong>front.endevelopment</strong> This tutorial explains about the opacity property in CSS. It is used widely to create cool hover effects. Feel free to ask us any doubts. Turn on post notifications for instant updates. Share @front.endevelopment with your friends.</h4>
            {/* Username + Caption */}
        </div>
    )
}

export default Post;