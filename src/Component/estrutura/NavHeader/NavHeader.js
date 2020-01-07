import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';

import ScrollMagic from 'scrollmagic';

import logo from './Logo.png';
import Tipografia from "./Tipografia.png"
import './styles.css';
import {H1, H5} from "../../../assets/css/Component/Title";

class NavHeader extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        };

        this.controller = new ScrollMagic.Controller();

    }

    componentDidMount() {
        console.log(this.props.match);
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
                    <NavbarBrand className='ml-5' href="/">
                        <img src={logo}/>
                    </NavbarBrand>
                    <div className='d-none d-lg-block'>
                        <NavbarBrand href="/">
                            <img src={Tipografia}/>
                        </NavbarBrand>
                    </div>

                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto mt-2 mr-3" navbar>
                            {this.props.router.map(router => {

                                if(router.menu){
                                    return (
                                        <NavItem key={router.name}>
                                            {/*<NavLink className={this.state.pages[router.name.split(' ').join('_')]} href={router.path}>{router.name}</NavLink>*/}
                                            <NavLink className={(this.props.active === router.name) ? 'active' : ''} href={router.path}>{router.name}</NavLink>
                                        </NavItem>
                                    )
                                }
                            })}

                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }

}


export default NavHeader;