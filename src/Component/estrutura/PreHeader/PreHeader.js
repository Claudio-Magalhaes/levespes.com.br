import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
} from 'reactstrap';

import './styles.css'
// ICONS
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import FacebookIcon from '@material-ui/icons/Facebook';
import PhoneIcon from '@material-ui/icons/Phone';

const Example = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar  id={'PreHeader'} color="false" light expand="md">
                <span onClick={toggle} className='d-md-none ml-auto mr-auto'>Nossos Contatos</span>
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto mr-auto" navbar>
                        <NavItem>
                            <NavLink className='PreHeader-link' href={null}><WhatsAppIcon/> (21) 88888-8888</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className='PreHeader-link' href={null}><PhoneIcon/> (21) 8888-8888 / 8888-8888</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className='PreHeader-link' href={null}><FacebookIcon/> Visite nossa Página</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default Example;