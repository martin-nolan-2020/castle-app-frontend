import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'

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
                    <Route path="/welcome/:name" component={WelcomeComponent}/>
                    <Route path="/castles" component={ListCastlesComponent}/>
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

class ListCastlesComponent extends Component{
    constructor(props){
        super(props)
        this.state = {
            castles : 
            [
                {id:1, description: "Red castle", length: 40, price: 150},
                {id:2, description: "Blue castle", length: 50, price: 180},
                {id:3, description: "Green castle", length: 45, price: 160},
            ]
        }
    }

    render(){
        return(
            <div>
                <h1>List of Castles</h1>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Description</th>
                            <th>Length</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    {/* loop through each castle and display it in a table row <tr></tr> */}
                    <tbody>
                        {
                            this.state.castles.map(
                                element => 
                                    <tr>
                                        <td>{element.id}</td>
                                        <td>{element.description}</td>
                                        <td>{element.length}</td>
                                        <td>{element.price}</td>
                                    </tr>
                            )
                        }
                        {/* <tr>
                            <td>{this.state.castles[1].id}</td>
                            <td>{this.state.castles[1].description}</td>
                        </tr> */}
                    </tbody>
                </table>
            </div>
        )
    }
}

class WelcomeComponent extends Component{
    render(){
        return(
            <div>
                <p>This is the welcome page. Welcome {this.props.match.params.name}</p>
                <p>View castles <Link to="/castles">here</Link></p>

            </div>
        )
    }
}

class HeaderComponent extends Component{
    render(){
        return(
            <div>
                This is the header component
                <hr></hr>
            </div>
        )
    }
}

class FooterComponent extends Component{
    render(){
        return(
            <div>
                <hr></hr>
                This is the footer component    
            </div>
        )
    }
}


function ErrorComponent(){
    return(
        <div>An error has occurred</div>
    )
}

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
                Username: <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
                Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
                <button onClick={this.loginClicked}>Login</button>

                {/* && operator can be used for conditional rendering as done here */}
                {this.state.loginFailed && <p>A bad login!</p>}
                {this.state.showSuccessMsg && <p>A successful login!</p>}
                {/* <ShowInvalidLogin loginFailed={this.state.loginFailed}/>
                <ShowValidLogin showSuccessMsg={this.state.showSuccessMsg}/> */}
                
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

export default CastleApp;
