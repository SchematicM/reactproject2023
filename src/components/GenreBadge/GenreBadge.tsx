import React, {FC} from 'react';

import './genreBadge.css'
const GenreBadge: FC< {name: string}>= ({name}) => {
    return (
        <div className={'genre'}>
            <button>{name}</button>
        </div>
    );
};

export default GenreBadge;