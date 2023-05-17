import React, {FC, useEffect} from 'react';
import {moviesActions} from "../../redux";
import {useAppDispatch, useAppSelector} from "../../hooks";
interface IProps{
    filePath: string
}

const PosterPreview:FC<IProps>= ({filePath}) => {
    const{poster} = useAppSelector(state => state.moviesReducer);
    const dispatch = useAppDispatch();

    useEffect(() => {
            dispatch(moviesActions.getPoster(filePath))
        },
        []);
    return (
        <div>
            <img src={poster} alt = 'poster'/>
            {/*Here should be poster*/}
        </div>
    );
};

export default PosterPreview;