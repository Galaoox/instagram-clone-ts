import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Post from "./components/Post";
import IPost from "./models/Post.interface";
function App() {
    const [posts, setPosts] = useState<IPost[]>([
        {
            username: "front.endevelopment",
            imageAvatar: "https://picsum.photos/200",
            caption:
                "his tutorial explains about the opacity property in CSS. It is used widely to create cool hover effects. Feel free to ask us any doubts. Turn on post notifications for instant updates. Share @front.endevelopment with your friends.",
            imageUrl: "https://picsum.photos/1000",
        },
        {
            username: "Orchestrator",
            imageAvatar: "https://picsum.photos/200",
            caption:
                "Enim adipisci omnis quaerat quisquam cumque aspernatur molestias soluta. Est nulla porro. Sint est velit dolores est. Nostrum amet molestias aut dolores odit non ipsa velit. Odit praesentium cum molestias nihil. Ullam quam ut.",
            imageUrl: "https://picsum.photos/1000",
        },
    ]);
    return (
        <div className="app">
            {/*  HEADER */}
            <Header />
            <h1>Hello esto es una app con react y ts</h1>
            {/*  POSTS */}
            {posts.map((post) => {
                return (
                    <Post
                        username={post.username}
                        caption={post.caption}
                        imageAvatar={post.imageAvatar}
                        imageUrl={post.imageUrl}
                    />
                );
            })}
        </div>
    );
}

export default App;
