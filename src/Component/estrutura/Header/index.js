import React from "react";

import './styles.css';
import {H1} from "../../../assets/css/Component/Title";
import Logo from '../../../assets/image/logoHeaderHome.png'
import ArrowDropDownCircleIcon from '@material-ui/icons/ArrowDropDownCircle';

const Heade = () => (
    <header>
        <div className="container">
            <div className="intro-text">

                <img
                    className="animated rollIn"
                    src={Logo}
                />

                <div className='alignAll-center animated delay-1s bounceInDown'>
                    <ArrowDropDownCircleIcon style={{fontSize: '5rem'}} className='animated pulse infinite' fontSize='inherit' />
                </div>
            </div>
        </div>
    </header>
);

export default Heade;