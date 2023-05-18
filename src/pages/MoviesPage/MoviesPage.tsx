import {FC} from "react";
import MoviesList from "../../components/MoviesList/MoviesList";
import MoviesPagination from "../../components/MoviesPagination/MoviesPagination";
import FunctionalHeader from "../../components/FunctionalHeader/FunctionalHeader";

const MoviesPage: FC = () => {
    return (
        <div>
            <FunctionalHeader/>
            <MoviesList/>
            <MoviesPagination/>
        </div>
    );
};

export default MoviesPage;