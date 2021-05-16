import React, { FC } from 'react';
import { Colors } from '../../ts/types';
import TattooPicCard from './TattooPicCard';
import '../../styles/TattooPost.scss';

interface Props extends Colors {
    src: string;
    alt?: string;
    classnames?: string;
    comments?: number;
}

const TattooPost: FC<Props> = ({ src, alt, color = 'green', classnames = '', comments }) => {
    return (
        <>
            <div className={`tattoo-post ${classnames}`}>
                <TattooPicCard src={src} alt={alt} color={color} />
                <div className="tattoo-post-btns">
                    <button type="button">
                        &#xF004;
                        <span>{comments}</span>
                    </button>
                    <button type="button">&#xf27a;</button>
                    <button type="button">&#xf1e0;</button>
                </div>
            </div>
        </>
    );
};

export default TattooPost;
