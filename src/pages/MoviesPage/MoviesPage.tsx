import {FC} from "react";
import MoviesList from "../../components/MoviesList/MoviesList";
import MoviesPagination from "../../components/MoviesPagination/MoviesPagination";

const MoviesPage: FC = () => {
    return (
        <div>
            <MoviesList/>
            <MoviesPagination/>
        </div>
    );
};

export default MoviesPage;