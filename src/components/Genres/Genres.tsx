import React, {FC} from 'react';
import {IGenre} from "../../interfaces/IGenre.interface";
import GenreBadge from "../GenreBadge/GenreBadge";
import './genres.css'

interface IProps{
genres: IGenre[];
}
const Genres: FC<IProps> = ({ genres }) => {
    return (
        <div className={'genres-content'}>
            <h3>Genres : </h3>
            <div className={'genres'}>
            {genres.map((genre) => (
                <GenreBadge key = {genre.id} name={genre.name} />
            ))}
        </div>
        </div>

    );
};

export default Genres;