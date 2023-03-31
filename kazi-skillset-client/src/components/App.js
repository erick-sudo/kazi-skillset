import "../App.css"
import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import Landing from "./Landing";
import Recents from "./Recents";
import Navbar from "./Navbar";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import Tasks from "./Tasks";
import Home from "./Home";
import Livechat from "./Livechat";
import ViewProfessional from "./ViewProfessional";

const App = () => {

  const [user, setUser] = useState(null)

  return (
    <div className="App bg-sky-200">
      <Navbar/>
      <Routes>
        <Route path="/" element={<><Landing /><Recents /></>} />
        <Route path="/home" element={<Home />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/prof/:id" element={<ViewProfessional />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
