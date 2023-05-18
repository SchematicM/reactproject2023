import React, {FC} from 'react';
import {ISpokenLanguage} from "../../interfaces";
import './spokenLanguages.css'

interface IProps {
    languages: ISpokenLanguage[]
}

const SpokenLanguages: FC<IProps> = ({languages}) => {
    return (
        <div className={'languages-content'}>
            <h3>Languages: </h3>
            <ul className={'languages-list'}>
                {
                    languages.map(lang => (<li key={lang.iso_639_1}>{lang.english_name}</li>))
                }
            </ul>
        </div>
    );
};
export default SpokenLanguages;