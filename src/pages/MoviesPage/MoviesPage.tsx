import React, {FC} from "react";

import MoviesList from "../../components/MoviesList/MoviesList";
import MoviesPagination from "../../components/MoviesPagination/MoviesPagination";
import Filters from "../../components/Filters/Filters";

import './moviePage.css'

const MoviesPage: FC = () => {
    return (
        <div>
            <div className={'main-content'}>
                <Filters/>
                <div className={'movies'}>
                    <MoviesList/>
                    <MoviesPagination/>
                </div>

            </div>
        </div>
    );
};

export default MoviesPage;