import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
//import AuthenticationService from './AuthenticationService.js'
import AuthenticatedRoute from './AuthenticatedRoute.jsx'
import LoginComponent from './LoginComponent.jsx'
import WelcomeComponent from './WelcomeComponent.jsx'
import HeaderComponent from './HeaderComponent.jsx'
import FooterComponent from './FooterComponent.jsx'
import LogoutComponent from './LogoutComponent.jsx'
import ListCastlesComponent from './ListCastlesComponent.jsx'
import ErrorComponent from './ErrorComponent.js'
import CastleComponent from './CastleComponent.jsx'

class CastleApp extends Component{
    render(){
        return(
            <div className="CastleApp">
            {/* <h1>a heading</h1>
            <h2>a smaller heading</h2> */}

            <Router>

                <HeaderComponent/>

                {/* the Switch means only one Route can be rendered at any point in time */}
                <Switch>
                    <Route path="/" exact component={LoginComponent}/>
                    <Route path="/login" component={LoginComponent}/>
                    <AuthenticatedRoute path="/castle/:id" component={CastleComponent}/>
                    <AuthenticatedRoute path="/welcome/:name" component={WelcomeComponent}/>
                    <AuthenticatedRoute path="/castles" component={ListCastlesComponent}/>
                    <AuthenticatedRoute path="/logout" component={LogoutComponent}/>

                    
                    <Route component={ErrorComponent}/>
                </Switch>

                <FooterComponent/>
            </Router>

            {/* <LoginComponent/>
            <WelcomeComponent/> */}
            </div>
        )
        
    }
}

export default CastleApp;
