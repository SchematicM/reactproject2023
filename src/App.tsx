import React, {lazy, Suspense} from 'react';
import {Navigate, Route, Routes} from "react-router-dom";

import './App.css';
const MoviesPage = lazy(()=>import("./pages/MoviesPage/MoviesPage")) ;
const MainLayout = lazy(()=>import("./Layouts/MainLayout/MainLayout"));
const MovieOverviewPage = lazy(()=>import("./pages/MovieOverviewPage/MovieOverviewPage"));
const UserDetailsPage  = lazy(()=>import("./pages/UserDetailsPage/UserDetailsPage"));

function App() {
    return (
        <div className="App">
            <Suspense fallback={(<p><i>Loading...</i></p>)}>
            <Routes>
                <Route path={'/'} element={<MainLayout/>}>
                    <Route index element={<Navigate to={'movies'}/>}/>
                    <Route path={'movies'} element={<MoviesPage/>}/>
                    <Route path={'overview/:id'} element={<MovieOverviewPage/>}/>
                    <Route path={'user-details'} element={<UserDetailsPage/>}/>
                </Route>
            </Routes>
            </Suspense>
        </div>
    );
}

export default App;
