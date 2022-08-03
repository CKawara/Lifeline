import React from "react";
import NavBar from "./NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import SinglePost from "./SinglePost";
import Dashboard from "./Dashboard";
import './App.css'


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path={"/"} element={<HomePage/>} exact/>
        <Route path={"/posts/:id"} element={<SinglePost/>}/>
        <Route path={"/dashboard"} element={<Dashboard/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;