import React from "react";
import Label from "reactstrap/es/Label";

import './style.css'

import { urlServer } from '../../../_core/Variable'
import Axios from "axios";
import { VerdeEscuro } from "../../ui/Butons/VerdeEscuro"
import PropTypes from "prop-types";

 class Email extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            nome : '',
            email: '',
            message: ''
        }

    }

    componentDidMount() {
        if(this.props.message !== null){
            this.setState({
                message: this.props.message
            })
        }
    }

     onChange = (event) => {
        const state  = Object.assign({}, this.state);
        const campo  = event.target.id;
        state[campo] = event.target.value;
        this.setState(state);
    };

    onSubmit = async (event) => {

        event.preventDefault();

        const response = await Axios.post(urlServer+'/core/Public/Functions/SendMail', this.state);

        if(response.data.status === true){
            alert('E-mail enviado.');

            if(
                typeof this.props.retorno === "function"
            ){
                this.props.retorno();
            }

        }else{
            alert("Desculpe, erro ao enviar o E-mail.");
        }

    };

    render() {
        return(
            <div id='cardEmail' className='container'>
                <div className='card' style={{backgroundColor: 'rgba(251, 245, 247, 0.35)'}}>

                    {this.props.children}

                    <div className='card-body mt-0 pt-0'>

                        <form onSubmit={this.onSubmit}>

                            <div className='col-12 row'>

                                <textarea className='input-contato-message col-12' required={true} placeholder={'Mensagem *'} onChange={this.onChange} value={this.state.message} id='message'>

                                </textarea>

                            </div>

                            <div className='col-12 row align-content-between'>

                                <div className='col-6 pl-0 pr-1'>
                                    <input type='text' className='input-contato col-12' required={true} placeholder={'Seu Nome *'} onChange={this.onChange} id='nome' value={this.state.nome}/>
                                </div>

                                <div className='col-6 pl-1 pr-0'>
                                    <input type='email' className='input-contato col-12' required={true} placeholder={'E-mail de Contato *'} onChange={this.onChange} id='email' value={this.state.email}/>
                                </div>

                            </div>

                            <div className='alignAll-center mt-3'>
                                <VerdeEscuro>Enviar</VerdeEscuro>
                            </div>

                        </form>

                    </div>

                </div>

            </div>
        )
    }

}


Email.propTypes = {
    retorno: PropTypes.func,
    message: PropTypes.string
};

Email.defaultProps = {
    retorno: null,
    message: null
};

export default Email;