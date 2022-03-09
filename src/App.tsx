import React, { useState } from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import User from './features/users/User';
import './App.css';
import {
  Routes,
  Route,
} from "react-router-dom";
import Home from "../src/CrudContext/Home"
import EditUser from './CrudContext/EditUser';
import AddUser from './CrudContext/AddUser';

function App() {

  return (
    <>
      <div className="App">
        <div style={{ maxWidth: '30rem', margin: "4rem auto" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/edit/:id" element={<EditUser />} />
            <Route path="/add" element={<AddUser />} />
          </Routes>
        </div>
        {/* <div className="btn btn-primary">Button</div> */}
        {/*  */}
        {/* <User /> */}
        {/*  */}
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Counter />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <span>
            <span>Learn </span>
            <a
              className="App-link"
              href="https://reactjs.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              React
            </a>
            <span>, </span>
            <a
              className="App-link"
              href="https://redux.js.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Redux
            </a>
            <span>, </span>
            <a
              className="App-link"
              href="https://redux-toolkit.js.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Redux Toolkit
            </a>
            ,<span> and </span>
            <a
              className="App-link"
              href="https://react-redux.js.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              React Redux
            </a>
          </span>
        </header> */}
      </div>
    </>
  );
}

export default App;
