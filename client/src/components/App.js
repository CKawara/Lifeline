import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import SinglePost from "./SinglePost";
import Dashboard from "./Dashboard";
import './App.css'
import Login from "./Login";
import NavBar from "./NavBar";


function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });

  }, []);
 
  if (!user) return <Login  onLogin={setUser} />;
  return (
    <BrowserRouter>
    <div className="App">
      <NavBar user={user} setUser={setUser}/>
      <Routes>
        <Route path={"/"} element={<HomePage/>} exact/>
        <Route path={"/posts/:id"} element={<SinglePost/>}/>
        <Route path={"/dashboard"} element={<Dashboard user={user}/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;