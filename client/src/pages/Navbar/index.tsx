import React from 'react';
import { Link } from 'react-router-dom';

import '../../styles/Navbar.scss';

const NavbarComponent: React.FC = () => {
    return (
        <nav>
            <span>&#xf015;</span>
            <span>&#xf002;</span>
            <Link to="/addtattoo">
                <span>&#xf0fe;</span>
            </Link>
            <span>&#xf004;</span>
            <span>&#xf007;</span>
        </nav>
    );
};

export default NavbarComponent;
