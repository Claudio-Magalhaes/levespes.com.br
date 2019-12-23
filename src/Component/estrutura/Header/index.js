import React from "react";

import './styles.css';
import {H1} from "../../../assets/css/Component/Title";

const Heade = () => (
    <header>
        <div className="container">
            <div className="intro-text">
                <div className="intro-lead-in">Leves Pés</div>
                <div className='alignAll-center animated pulse infinite' >
                    <div style={{backgroundColor: 'white', borderRadius: '50px', padding: '10px'}}>
                        <span className="intro-heading">Podologia</span>
                    </div>
                </div>
            </div>
        </div>
    </header>
);

export default Heade;