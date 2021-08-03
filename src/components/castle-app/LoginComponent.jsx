import React, {Component} from 'react'
import AuthenticationService from './AuthenticationService.js'


class LoginComponent extends Component{
    constructor(props){
        super(props)
        this.state = {
            username: "",
            password: "",
            loginFailed: false,
            showSuccessMsg: false 
        }

        // this.handleUnameChange = this.handleUnameChange.bind(this)
        // this.handlePWChange = this.handlePWChange.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.loginClicked = this.loginClicked.bind(this)
    }

    render(){
        return(
            <div>      
                <h1>Login</h1>
                <div className="container">
                    Username: <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
                    Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
                    <button className="btn btn-success" onClick={this.loginClicked}>Login</button>

                    {/* && operator can be used for conditional rendering as done here */}
                    {this.state.loginFailed && <div className="alert alert-warning">A bad login!</div>}
                    {this.state.showSuccessMsg && <div>A successful login!</div>}
                    {/* <ShowInvalidLogin loginFailed={this.state.loginFailed}/>
                    <ShowValidLogin showSuccessMsg={this.state.showSuccessMsg}/> */}
                </div>
            </div>
        )
    }

    //want to handle all changes - so create a generic function
    //name="username" in render method --> Username --> input type must match constructor(props) --> this.state.username.
    //"username"==="username" and "password"==="password" so both work 
    handleChange(event){
        console.log("event.target.name --> " + event.target.name + "; event.target.value --> "+ event.target.value)
        this.setState(
            {
                //square brakcets needed for name of object variable, which is a constant
                [event.target.name]: 
                    event.target.value
            }
        )
    }

    loginClicked(){
        if(this.state.username==="un" && this.state.password==="pw"){
            console.log("Good username and password")
            AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password)
            // redirect Routing to welcome page:
            this.props.history.push(`/welcome/${this.state.username}`)

            // this.setState({showSuccessMsg:true})
            // this.setState({loginFailed:false})
            console.log(this.state.showSuccessMsg)
        } else{
            console.log("Bad username and password")
            this.setState({showSuccessMsg:false})
            this.setState({loginFailed:true})
        }
    }
}

// function ShowInvalidLogin(props){
//     if(props.loginFailed){
//         return <p>Bad login!</p>
//     } else return null
// }

// function ShowValidLogin(props){
//     if(props.showSuccessMsg){
//         return <p>Successful Login</p>
//     } else return null
// }

export default LoginComponent