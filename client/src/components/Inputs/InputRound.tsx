import React, { useState } from 'react';
import { Colors } from '../../ts/types';

interface Props extends Colors {
    placeholder?: string;
    classnames?: string | null;
}

const InoutRound = ({ color = 'green', placeholder, classnames }: Props): JSX.Element => {
    const [value, setValue] = useState('');

    return (
        <input
            className={`input-heading input-${color} ${classnames}`}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder={placeholder}
        ></input>
    );
};

export default InoutRound;
