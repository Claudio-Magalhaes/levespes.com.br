import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';

import './styles.css'
// ICONS
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import FacebookIcon from '@material-ui/icons/Facebook';
import PhoneIcon from '@material-ui/icons/Phone';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';

const PreHeader = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar  id={'PreHeader'} color="false" light expand="md">
                <span onClick={toggle} className='d-md-none ml-auto mr-auto'>Nossos Contatos</span>

                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto mr-auto" navbar>
                        <NavItem>
                            <NavLink className='PreHeader-link' href={null}><WhatsAppIcon/> (21) 98343-3908</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className='PreHeader-link' href={null}><PhoneIcon/> (21) 2544-6337 / 98343-3908</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className='PreHeader-link' target='_blank' href={'https://www.facebook.com/LevesPesPodologia/'}><FacebookIcon/> Visite nossa Página</NavLink>
                        </NavItem>
                        <NavItem className='d-md-none d-sm-block d-lg-block'>
                            <NavLink className='PreHeader-link' href={null}><AlternateEmailIcon/> contato@levespes.com.br</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>

            </Navbar>
        </div>
    );
}

export default PreHeader;