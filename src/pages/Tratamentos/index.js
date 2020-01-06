import React from "react";


import {Container} from "reactstrap";
import CardServicos  from "../../Component/ui/Card/CardServicos";

export default class Tratamento extends React.Component{
    constructor(props) {
        super(props);
        this.state ={
        }
    }

    componentDidMount() {
        this.props.data.pagesActive('Tratamentos');
    }

    render() {

        return(
            <>
                <Container className='mt-5 pt-5'>
                    <div className='row'>

                        {this.props.data.tratamentos().map(s =>(
                            <>
                                <CardServicos data={s} />
                            </>
                        ))}

                    </div>

                </Container>
            </>
        );
    }

}