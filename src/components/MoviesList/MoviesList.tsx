import React, {FC, useEffect} from 'react';

import {useAppDispatch, useAppLocation, useAppSelector} from "../../hooks";
import {moviesActions} from "../../redux";
import MovieListCard from "../MovieListCard/MovieListCard";

import './moviesList.css'
import {IQuery} from "../../interfaces";


const MoviesList: FC = () => {
    const {results, total_pages, isSorted} = useAppSelector((state) => state.moviesReducer);
    const dispatch = useAppDispatch();
    const location = useAppLocation<IQuery>();
    const searchParams = new URLSearchParams(location.search);
    let page = searchParams.get('page');
    const query = searchParams.get('query');
    const with_genres = searchParams.get('with_genres');
    useEffect(() => {
        if (!page) {
            page = '1';
            searchParams.set('page', page);
        }
        if (query) {
            dispatch(moviesActions.searchMovies({query, page}));
            return;
        } else {
            isSorted ?
                dispatch(moviesActions.getRatedMovies(window.location.search)) :
                dispatch(moviesActions.getAll(window.location.search));
        }

    }, (
[page,query, with_genres,isSorted]
));


return (
    <div>
        {
            results &&
            <div className={'movies-list'}>
                {results.map((movie) => (
                    <MovieListCard key={movie.id} movie={movie}/>
                ))}
            </div>}
        {
            total_pages === 0 && <div className={'warning'}>
                <h2>Sorry, but there are no movies with chosen genres!</h2>
            </div>
        }
    </div>
);
}
;


export default MoviesList;
//
// import React, {FC, useEffect} from 'react';
//
// import {useAppDispatch, useAppLocation, useAppSelector} from "../../hooks";
// import {moviesActions} from "../../redux";
// import MovieListCard from "../MovieListCard/MovieListCard";
//
// import './moviesList.css'
// import {IQuery} from "../../interfaces";
// import {useNavigate} from "react-router-dom";
//

// const MoviesList: FC = () => {
//     const {results, total_pages,isSorted,chosenGenres} = useAppSelector((state) => state.moviesReducer);
//     const dispatch = useAppDispatch();
//     const location = useAppLocation<IQuery>();
//     const searchParams = new URLSearchParams(location.search);
//     const query = searchParams.get('query');
//     const navigate = useNavigate();
//     useEffect(()=>{
//         if (query) {
//             dispatch(moviesActions.searchMovies({query, page:'1'}));
//             return;
//         } else{
//             isSorted?
//                 dispatch(moviesActions.getRatedMovies(window.location.search)):
//                 dispatch(moviesActions.getAll(window.location.search));}
//
//     },[searchParams,isSorted]);
//
//     return (
//         <div>
//             {
//                 results &&
//                 <div className={'movies-list'}>
//                     {results.map((movie) => (
//                         <MovieListCard key={movie.id} movie={movie}/>
//                     ))}
//                 </div>}
//             {
//                 total_pages === 0 && <div className={'warning'}>
//                     <h2>Sorry, but there are no movies with chosen genres!</h2>
//                 </div>
//             }
//         </div>
//     );
// };
//
//
// export default MoviesList;