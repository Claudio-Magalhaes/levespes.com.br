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

import ScrollMagic from 'scrollmagic';

import logo from './Logo.png';
import './styles.css';

class NavHeader extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        };

        this.controller = new ScrollMagic.Controller();

    }

    componentDidMount() {

        // build scenes
        new ScrollMagic.Scene({
            offset: '50%',
        })
            .setClassToggle("#NavHeaderTransparente", 'affix')
            .addTo(this.controller);

    }

    toggle = () => {
        this.setState({
            isOpen : (!this.state.isOpen)
        })
    };

    render() {

        return (
            <div>
                <Navbar id={'NavHeaderTransparente'} fixed={'top'} color="false" light expand="md">
                    <NavbarBrand className='ml-5' href="/"><img src={logo}/></NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto mt-2 mr-3" navbar>
                            {this.props.router.map(router => {

                                return (
                                    <NavItem>
                                        <NavLink href={router.path}>{router.name}</NavLink>
                                    </NavItem>
                                )
                            })}

                            {/*<UncontrolledDropdown nav inNavbar>*/}
                            {/*    <DropdownToggle nav caret>*/}
                            {/*        Nossos Tratamentos*/}
                            {/*    </DropdownToggle>*/}
                            {/*    <DropdownMenu right>*/}
                            {/*        <DropdownItem>*/}
                            {/*            Option 1*/}
                            {/*        </DropdownItem>*/}
                            {/*        <DropdownItem>*/}
                            {/*            Option 2*/}
                            {/*        </DropdownItem>*/}
                            {/*        <DropdownItem divider />*/}
                            {/*        <DropdownItem>*/}
                            {/*            Reset*/}
                            {/*        </DropdownItem>*/}
                            {/*    </DropdownMenu>*/}
                            {/*</UncontrolledDropdown>*/}

                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );

    }

}


export default NavHeader;