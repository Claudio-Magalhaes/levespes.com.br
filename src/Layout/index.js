import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import routes from '../_core/routes'


import NavHeader from "../Component/estrutura/NavHeader/NavHeader"
import PreHeader from "../Component/estrutura/PreHeader/PreHeader";


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
                <PreHeader/>

                <NavHeader />

                <div>{this.SwitchRoutes}</div>

                {/*<Footer/>*/}
            </>
        );
    }
}