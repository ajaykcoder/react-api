import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Users from "./pages/Users";
import Posts from "./pages/Posts";
import Login from "./pages/Login";
import Register from "./pages/Register";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home page="home"/>}/>
                <Route path="/users" element={<Users page="user"/>}/>
                <Route path="/posts" element={<Posts page={"blog"}/>}/>
                <Route path="/login" element={<Login page={"login"}/>}/>
                <Route path="/register" element={<Register page={"register"}/>}/>
            </Routes>
        </Router>
    );
}
export default App;