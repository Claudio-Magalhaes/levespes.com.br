import React, { Component } from 'react';
import { Link } from 'react-scroll'

import ScrollMagic from 'scrollmagic';

import './styles.css';

export default class NavHeader extends Component {

    constructor(props) {
        super(props);
        this.controller = new ScrollMagic.Controller();
    }

    componentDidMount() {

        // build scenes
        new ScrollMagic.Scene({
            offset: '100%',
        })
            .setClassToggle("#mainNav", 'affix')
            .addTo(this.controller);

    }

    render() {
        return (
            <nav id="mainNav" className="navbar navbar-default navbar-custom navbar-fixed-top">
                <div className="container">
                    {/*Brand and toggle get grouped for better mobile display*/}
                    <div className="navbar-header page-scroll">
                        <button type="button" className="navbar-toggle" data-toggle="collapse"
                                data-target="#bs-example-navbar-collapse-1">
                            <span className="sr-only">Opem Menu</span> Menu <i className="fa fa-bars"></i>
                        </button>
                        <Link activeClass="active" className="navbar-brand page-scroll" to="page-top" spy={false} smooth={true}>Start Bootstrap</Link>
                    </div>

                    {/* Collect the nav links, forms, and other content for toggling */}
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav navbar-right">
                            <li className="hidden">
                                <Link to={'#page-top'}></Link>
                            </li>
                            <li>
                                <Link activeClass="active" className="page-scroll" to="services" spy={false} smooth={true} >Serviços</Link>
                            </li>
                            <li>
                                <Link activeClass="active" className="page-scroll" to="portfolio" spy={false} smooth={true} >Portfolio</Link>
                            </li>
                            <li>
                                <Link activeClass="active" className="page-scroll" to="about" spy={false} smooth={true} >Sobre</Link>
                            </li>
                            <li>
                                <Link activeClass="active" className="page-scroll" to="team" spy={false} smooth={true} >Equipe</Link>
                            </li>
                            <li>
                                <Link activeClass="active" className="page-scroll" to="contact" spy={false} smooth={true} >Contato</Link>
                            </li>
                        </ul>
                    </div>
                    {/*/.navbar-collapse*/}
                </div>
                {/*/.container-fluid*/}
            </nav>
        )
    }

}