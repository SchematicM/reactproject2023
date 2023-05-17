import React from 'react';
import './App.css';
import {Navigate, Route, Routes} from "react-router-dom";
import MoviesPage from "./pages/MoviesPage/MoviesPage";
import MainLayout from "./Layouts/MainLayout/MainLayout";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path={'/'} element={<MainLayout/>}>
                    <Route index element={<Navigate to={'movies'}/>}/>
                    <Route path={'movies'} element={<MoviesPage/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
