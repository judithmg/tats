import React from 'react';
import '../../styles/Headers.scss';

interface Props {
    title: string;
}

const PopupHeader: React.FC<Props> = ({ title }) => (
    <div className="popup-header">
        <h2>{title}</h2>
        <span>&#xf057;</span>
    </div>
);
export default PopupHeader;
