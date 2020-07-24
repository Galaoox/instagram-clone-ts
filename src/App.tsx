import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Post from './components/Post';
function App() {
  return (
    <div className="app">
      {/*  HEADER */}
      <Header />
      <h1>Hello esto es una app con react y ts</h1>
      {/*  POSTS */}
      <Post />
      {/*  POSTS */}

    </div>
  );
}

export default App;
