import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";

import './App.css';
import MoviesPage from "./pages/MoviesPage/MoviesPage";
import MainLayout from "./Layouts/MainLayout/MainLayout";
import MovieOverviewPage from "./pages/MovieOverviewPage/MovieOverviewPage";
import UserDetailsPage from "./pages/UserDetailsPage/UserDetailsPage";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path={'/'} element={<MainLayout/>}>
                    <Route index element={<Navigate to={'movies'}/>}/>
                    <Route path={'movies'} element={<MoviesPage/>}/>
                    <Route path={'overview/:id'} element={<MovieOverviewPage/>}/>
                    <Route path={'user-details'} element={<UserDetailsPage/>}/>

                </Route>
            </Routes>
        </div>
    );
}

export default App;
