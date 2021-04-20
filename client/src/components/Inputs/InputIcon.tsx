import React, { useState } from 'react';
import '../../styles/Inputs.scss';
import { Colors } from '../../ts/types';

interface Props extends Colors {
    placeholder?: {
        props: {
            children: string;
        };
    };
    classnames?: string | null;
}

const InputIcon = ({ color = 'green', placeholder, classnames }: Props): JSX.Element => {
    const [value, setValue] = useState('');

    return (
        <>
            <input
                className={`input-icon input-side input-${color} ${classnames}`}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder={placeholder.props.children}
            ></input>
        </>
    );
};
export default InputIcon;
