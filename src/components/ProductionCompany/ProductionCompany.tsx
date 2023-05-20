import React, {FC} from 'react';

import {ICompany} from "../../interfaces";
import {basePosterURL} from "../../constants";

import './productionCompany.css'

const ProductionCompany: FC<ICompany> = ({logo_path, name}) => {
    return (
        <div className={'production-company-content'}>
            <div className={'logo'}>
                {logo_path&& <img src={basePosterURL + logo_path} alt={name}/>}
            </div>
            <div className={'company-name'}>
                <h6>{name}</h6>
            </div>

        </div>
    );
};

export default ProductionCompany;