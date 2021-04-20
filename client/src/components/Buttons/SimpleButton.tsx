import React from 'react';
import '../../styles/Buttons.scss';
import { Colors } from '../../ts/types';

interface Props extends Colors {
    classnames?: string | null;
    text: string;
}

const SimpleButton = ({ color = 'green', classnames, text }: Props): JSX.Element => {
    return (
        <>
            <button type="button" className={`btn-simple btn-${color} ${classnames}`}>
                {text}
            </button>
        </>
    );
};
export default SimpleButton;
