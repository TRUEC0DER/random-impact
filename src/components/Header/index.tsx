import React from 'react';
import "./Header.scss"
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div className="header">
            <div className="info">
                <a className="title">Random Impact</a>
                <a className="subtitle">v0.1.1</a>
            </div>
            {/*<div className="links">*/}
            {/*    <Link to="/">*/}
            {/*        <img src="/static/images/Icon_Entities.png"/>*/}
            {/*    </Link>*/}
            {/*</div>*/}
        </div>
    );
};

export default Header;