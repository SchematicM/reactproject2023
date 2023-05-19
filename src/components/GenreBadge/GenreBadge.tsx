import React, {FC} from 'react';

import './genreBadge.css'
import {IGenre} from "../../interfaces";

const GenreBadge: FC<IGenre> = ({name, id}) => {
    const showFilmsWithGenre =  (id:number) => {
        const query = `page=1&with_genres=${id}`;
        window.location.href = `/movies?${query}`;
    }
    return (
        <div className={'genre'}>
            <button onClick={() => showFilmsWithGenre(id)}>{name}</button>
        </div>
    );
};

export default GenreBadge;