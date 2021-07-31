import React, {Component} from 'react'

class CastleApp extends Component{
    render(){
        return(
            <div className="CastleApp">
            <h1>a heading</h1>
            <h2>a smaller heading</h2>
            <LoginComponent/>
            </div>
        )
        
    }
}

class LoginComponent extends Component{
    render(){
        return(
            <div>
                Username: <input type="text" name="username"/>
                Password: <input type="password" name="password"/>
                <button>Login</button>
            </div>
        )
    }
}

export default CastleApp;
