import {FC} from "react";

import {ICompany} from "../../interfaces";
import ProductionCompany from "../ProductionCompany/ProductionCompany";

import './productionCompanies.css';
interface IProps {
    companies: ICompany[]
}
const ProductionCompanies: FC<IProps> = ({companies}) => {
    return (
        <div className={'production-companies-content'}>
            <h3>Production companies: </h3>
            <div className={'production-companies-list'}>
                {
                    companies.map(company => <ProductionCompany key={company.id} id={company.id}
                                                                logo_path={company.logo_path}
                                                                name={company.name} origin_country={company.origin_country}/>)
                }
            </div>
        </div>
    );
};

export default ProductionCompanies;