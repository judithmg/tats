import React, { FC } from 'react';
import { Colors } from '../../ts/types';

import '../../styles/TattooPics.scss';

interface Props extends Colors {
    src: string;
    alt?: string;
    classnames?: string;
}

const TattooPicCard: FC<Props> = ({ src, alt = 'tattoo pic', color = 'green', classnames = '' }) => {
    return (
        <>
            <div className={`pic-${color}`}>
                <img src={src} alt={alt} className={`${classnames} pic-tattoo`} />
            </div>
        </>
    );
};

export default TattooPicCard;
