import { useState } from "react";
import {BrowserRouter, Route, Routes, Router} from 'react-router-dom'
import axios from "axios";
import logo from './logo.svg';
import './App.css';
import PasswordProtect from "./components/PasswordProtected";
import Hello from "./components/Questions";
import AdminPage from "./components/Admin";
import Profile from "./components/Profile";

const base_url = process.env.REACT_APP_KF_BASE_URL

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<PasswordProtect />} />
                <Route exact path="admin" element={<AdminPage />} />
                <Route exact path="profile" element={<Profile />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;