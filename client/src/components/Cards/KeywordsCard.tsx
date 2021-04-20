import React, { FC } from 'react';
import InputRound from '../Inputs/InputRound';
import '../../styles/KeywordsCard.scss';

import { Colors } from '../../ts/types';

interface Props extends Colors {
    classnames?: string;
}

const KeywordsCard: FC<Props> = ({ classnames = '' }) => {
    return (
        <div className={`keywords`}>
            <h2>Keywords</h2>
            <InputRound color="lilac" placeholder="Add keywords..." />
            <p>
                <span>&#xF3ef;</span>Metallica
            </p>
            <p>
                <span>&#xF3ef;</span>Heavy
            </p>
            <p>
                <span>&#xF3ef;</span>Metal
            </p>
            <p>
                <span>&#xF3ef;</span>Black work
            </p>
            <p>
                <span>&#xF3ef;</span>Barcelona
            </p>
            <p>
                <span>&#xF3ef;</span>Skull
            </p>
        </div>
    );
};

export default KeywordsCard;
