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
import ErrorPage from './ErrorPage';
import AdminLayOut from './admin-dashboard/AdminLayOut';
import Dashboard from './admin-dashboard/components/Dashboard';
import Blank from './admin-dashboard/components/Blank';

function App() {

  return (
    <>
      <div className="App">
        <div>
          <Routes>
            <Route path="/" element={<AdminLayOut />}>
              <Route index element={<Dashboard />} />
              <Route path="riders" element={<Blank />} />
              <Route path="payments" element={<Blank />} />
              <Route path="learning-center" element={<Blank />} />
              <Route path="settings" element={<Blank />} />
              <Route path="faqs" element={<Blank />} />
              <Route path="" element={<Blank />} />
            </Route>

            {/* <Route path="/" element={<Home />} />
            <Route path="/edit/:id" element={<EditUser />} />
            <Route path="/add" element={<AddUser />} /> */}
            <Route path="*" element={<ErrorPage />} />
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

// https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/basic_type_example/