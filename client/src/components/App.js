import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import SinglePost from "./SinglePost";
import Dashboard from "./Dashboard";
import './App.css'
import Login from "./Login";


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path={'/'}  element={<Login/>} exact/>
        <Route path={"/home"} element={<HomePage/>} exact/>
        <Route path={"/posts/:id"} element={<SinglePost/>}/>
        <Route path={"/dashboard"} element={<Dashboard/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;