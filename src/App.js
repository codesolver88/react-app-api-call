import React, { Component } from 'react';
import {Provider} from 'react-redux';

import logo from './logo.svg';
import './App.css';


import Posts from './components/Posts';
import PostForm from './components/Postform';


import store from './store';



class App extends Component {
  render() {
    return (
      <Provider store = {store}>
        <div className="container">
          <div className=" row">
            <header className="App-header col-md-12">
              <h1 className="App-title col-md-offset-4">Welcome to Portal Dashoboard</h1>
            </header>
            <PostForm />
            <hr />
            <Posts />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
