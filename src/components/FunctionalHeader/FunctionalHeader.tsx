import React, {FC} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";

import {IQuery} from "../../interfaces";
import {useNavigate} from "react-router-dom";

import './functionalHeader.css';

const FunctionalHeader: FC = () => {
    const {handleSubmit, register,reset} = useForm<IQuery>();
const navigate = useNavigate();
    const search: SubmitHandler<IQuery> =  (data) => {
        const query = `page=1&query=${data.query}`;
        navigate(`/movies?${query}`);
        reset();
    };

    return (
            <form onSubmit={handleSubmit(search)} className={'search'}>
                <input type="text" placeholder="Search" {...register('query', {required: true})} />
                <button type="submit"><i className="fa-sharp fa-solid fa-magnifying-glass fa-sm"></i></button>
            </form>
    );
};


export default FunctionalHeader;