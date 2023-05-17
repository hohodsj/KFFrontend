import { useState } from "react";
import {BrowserRouter, Route, Routes, Router} from 'react-router-dom'
import axios from "axios";
import logo from './logo.svg';
import './App.css';
import PasswordProtect from "./components/PasswordProtected";
import AdminPage from "./components/Admin";
import Profile from "./components/Profile";
import RewardPage from "./components/subcomponents/Reward";

const base_url = process.env.REACT_APP_KF_BASE_URL

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<PasswordProtect />} />
                <Route exact path="admin" element={<AdminPage />} />
                <Route exact path="profile" element={<Profile />} />
                <Route exact path="reward" element={<RewardPage/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
