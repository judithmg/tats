import React, { FC } from 'react';
import InputRound from '../../components/Inputs/InputRound';
import Header from '../../components/Headers/Popup';
import '../../styles/YourAppointment.scss';

interface Props {
    classnames?: string;
}

const YourAppointment: FC<Props> = ({ classnames = '' }) => {
    return (
        <div className={`appointment ${classnames}`}>
            <Header title="Your appointment" />
            <InputRound color="lilac" placeholder="Add keywords..." />
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
        </div>
    );
};

export default YourAppointment;
