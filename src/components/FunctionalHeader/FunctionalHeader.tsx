import React, {FC} from 'react';
import './functionalHeader.css';
import {SubmitHandler, useForm} from "react-hook-form";
import {IQuery} from "../../interfaces";


const FunctionalHeader: FC = () => {
    const {handleSubmit, register} = useForm<IQuery>();

    const search: SubmitHandler<IQuery> = async (data) => {
        const query = `page=1&query=${data.query}`;
        window.location.href = `/movies?${query}`;
    };

    return (
            <form onSubmit={handleSubmit(search)} className={'search'}>
                <input type="text" placeholder="Search" {...register('query', {required: true})} />
                <button type="submit"><i className="fa-sharp fa-solid fa-magnifying-glass fa-sm"></i></button>
            </form>
    );
};


export default FunctionalHeader;