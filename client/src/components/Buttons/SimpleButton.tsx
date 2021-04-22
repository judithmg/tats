import React from 'react';
import '../../styles/Buttons.scss';
import { Colors } from '../../ts/types';

interface Props extends Colors {
    classnames?: string | null;
    text: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const SimpleButton = ({ color = 'green', classnames, text, onClick }: Props): JSX.Element => {
    return (
        <>
            <button onClick={onClick} type="button" className={`btn-simple btn-${color} ${classnames}`}>
                {text}
            </button>
        </>
    );
};
export default SimpleButton;
