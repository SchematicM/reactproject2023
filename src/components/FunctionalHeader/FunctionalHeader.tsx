import React, {FC} from 'react';
import './functionalHeader.css';
import {SubmitHandler, useForm} from "react-hook-form";
import {useAppDispatch} from "../../hooks";
import {moviesActions} from "../../redux";
import './functionalHeader.css';



interface SearchFormValues {
    query: string;
}

const FunctionalHeader: FC = () => {
    const { handleSubmit, register } = useForm<SearchFormValues>();
    const dispatch = useAppDispatch();

    const search: SubmitHandler<SearchFormValues> = async (data) => {
        await dispatch(moviesActions.searchMovies(data.query));
    };

    return (
        <div className="action-header">
            header
            Search
            <form onSubmit={handleSubmit(search)}>
                <input type="text" placeholder="Search" {...register('query', { required: true })} />
                <button type="submit">Search</button>
            </form>
            Filters
        </div>
    );
};


export default FunctionalHeader;