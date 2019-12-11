import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import routes from '../routes'


import NavHeader from "../Component/estrutura/NavHeader/NavHeader"


export default class Layout extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            preloader : true
        }
    }


    SwitchRoutes = (
        <Switch>
            {routes.map((prop, key) => {

                if(prop.path === '/'){
                    return (
                        <Route
                            exact
                            path={prop.path + prop.params}
                            render={(props) => <prop.component  {...props} alterPreLoad={this.alterPreLoad}/>}
                            key={key}
                        />
                    );
                }else{

                    return (
                        <Route
                            path={prop.path + prop.params}
                            render={(props) => <prop.component  {...props} alterPreLoad={this.alterPreLoad}/>}
                            key={key}
                        />
                    );
                }

            })}
            <Redirect to="/" />
        </Switch>
    );

    render() {

        return (
            <>

                <NavHeader />
                {/*<div style={{'height' : '120px'}}></div>*/}

                <div>{this.SwitchRoutes}</div>

                {/*<Footer/>*/}
            </>
        );
    }
}