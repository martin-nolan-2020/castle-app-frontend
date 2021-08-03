import React, { Component } from "react"
import AuthenticationService from "./AuthenticationService.js"
import {Route, Redirect} from "react-router-dom"

//this class prevents the user from manually entering the url for the Welcome, Castles, or Logout pages
class AuthenticatedRoute extends Component{
    render(){
        if(AuthenticationService.isUserLoggedIn()){
                //spread operator ... uses all elements
            return <Route {...this.props}/>
        } else{
            return <Redirect to="/login"/>
        }
    }
    
}
export default AuthenticatedRoute;