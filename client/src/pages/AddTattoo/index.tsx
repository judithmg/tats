import React from 'react';
import { Link } from 'react-router-dom';
import InputRound from '../../components/Inputs/InputRound';
import InputIcon from '../../components/Inputs/InputIcon';
import InputSideBorder from '../../components/Inputs/InputSideBorder';
import SimpleButton from '../../components/Buttons/SimpleButton';

import '../../styles/AddTattoo.scss';

const AddTattoo: React.FC = () => {
    function loginUser() {
        console.log('yooo');
    }
    return (
        <section className="add__component">
            <div>
                <InputRound color="lilac" classnames="add__input" placeholder="Title" />
                <InputRound color="lilac" classnames="add__input" placeholder="Artist" />
                <InputRound color="lilac" classnames="add__input" placeholder="Artist" />
                <InputIcon color="yellow" classnames="add__input" placeholder={<>&#xF002;</>} />
                <InputSideBorder color="lilac" classnames="add__input" placeholder="Artist" />
                <Link to="/dashboard">
                    <SimpleButton color="green" text="Sign up" onClick={loginUser} />
                </Link>
            </div>
        </section>
    );
};

export default AddTattoo;
