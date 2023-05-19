import React, {FC} from 'react';
import './functionalHeader.css';
import {SubmitHandler, useForm} from "react-hook-form";
import { useAppLocation} from "../../hooks";
import {IQuery} from "../../interfaces";


const FunctionalHeader: FC = () => {
    const {handleSubmit, register} = useForm<IQuery>();
    const location = useAppLocation<IQuery>();

    const search: SubmitHandler<IQuery> = async (data) => {
        const searchParams = new URLSearchParams(location.search);
        searchParams.set('query', data.query);
        const page:string = '1';
        searchParams.set('page', page);
        const newUrl = `${location.pathname}?page=${page}&query=${encodeURIComponent(searchParams.get('query')!)}`;
        window.history.replaceState(null, '', newUrl);
    };

    return (
        <div className="action-header">
            header
            Search
            <form onSubmit={handleSubmit(search)}>
                <input type="text" placeholder="Search" {...register('query', {required: true})} />
                <button type="submit">Search</button>
            </form>
            Filters
        </div>
    );
};


export default FunctionalHeader;