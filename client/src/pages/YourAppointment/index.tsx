import React, { FC } from 'react';
import InputRound from '../../components/Inputs/InputRound';
import Header from '../../components/Headers/Popup';
import '../../styles/YourAppointment.scss';
import SimpleButton from '../../components/Buttons/SimpleButton';

interface Props {
    classnames?: string;
}

const YourAppointment: FC<Props> = ({ classnames = '' }) => {
    return (
        <div className={`appointment ${classnames}`}>
            <Header title="Your appointment" />
            <InputRound color="lilac" placeholder="Add keywords..." />
            {/* hacer un componente con cada pregunta, las estrellas se obtendrían con un GET, por props se pasa el título de la pregunta
            el tipo de pregunta (stars/checkbox)
            */}
            <p>
                Was the appointment on time?
                <span>&#xF005;</span>
                <span>&#xF005;</span>
                <span>&#xF005;</span>
                <span>&#xF005;</span>
                <span>&#xF005;</span>
            </p>
            <p>
                Was the appointment on time?
                <span>&#xF005;</span>
                <span>&#xF005;</span>
                <span>&#xF005;</span>
                <span>&#xF005;</span>
                <span>&#xF005;</span>
            </p>
            <p>
                Was the appointment on time?
                <span>&#xF005;</span>
                <span>&#xF005;</span>
                <span>&#xF005;</span>
                <span>&#xF005;</span>
                <span>&#xF005;</span>
            </p>
            <p>
                <span>&#xf14a;</span>
                Did the artist have music on?
            </p>
            <div className="appointment-btn">
                <SimpleButton text="Add" color="lilac" />
            </div>
        </div>
    );
};

export default YourAppointment;
