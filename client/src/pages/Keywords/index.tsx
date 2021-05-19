import React, { FC } from 'react';
import InputRound from '../../components/Inputs/InputRound';
import '../../styles/Keywords.scss';
import Header from '../../components/Headers/Popup';

import { Colors } from '../../ts/types';

interface Props extends Colors {
    classnames?: string;
}

const Keywords: FC<Props> = ({ classnames = '' }) => {
    return (
        <div className={`keywords ${classnames}`}>
            <Header title="Keywords" />
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

export default Keywords;
