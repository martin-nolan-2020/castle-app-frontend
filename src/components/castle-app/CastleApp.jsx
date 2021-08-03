import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
// import AuthenticationService from './AuthenticationService.js'
import AuthenticatedRoute from './AuthenticatedRoute.jsx'
import LoginComponent from './LoginComponent.jsx'
import WelcomeComponent from './WelcomeComponent.jsx'
import HeaderComponent from './HeaderComponent.jsx'
import FooterComponent from './FooterComponent.jsx'
import LogoutComponent from './LogoutComponent.jsx'
import ListCastlesComponent from './ListCastlesComponent.jsx'
import ErrorComponent from './ErrorComponent.js'

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

// class ListCastlesComponent extends Component{
//     constructor(props){
//         super(props)
//         this.state = {
//             castles : 
//             [
//                 {id:1, description: "Red castle", length: 40, price: 150},
//                 {id:2, description: "Blue castle", length: 50, price: 180},
//                 {id:3, description: "Green castle", length: 45, price: 160},
//             ]
//         }
//     }

//     render(){
//         return(
//             <div>
//                 <h1>List of Castles</h1>
//                 <div className="container">
//                     <table className="table">
//                         <thead>
//                             <tr>
//                                 <th>ID</th>
//                                 <th>Description</th>
//                                 <th>Length</th>
//                                 <th>Price</th>
//                             </tr>
//                         </thead>
//                         {/* loop through each castle and display it in a table row <tr></tr> */}
//                         <tbody>
//                             {
//                                 this.state.castles.map(
//                                     element => 
//                                         // add key to remove console warning:
//                                         // Warning: Each child in a list should have a unique "key" prop.
//                                         <tr key={element.id}>
//                                             <td>{element.id}</td>
//                                             <td>{element.description}</td>
//                                             <td>{element.length}</td>
//                                             <td>{element.price}</td>
//                                         </tr>
//                                 )
//                             }
//                             {/* <tr>
//                                 <td>{this.state.castles[1].id}</td>
//                                 <td>{this.state.castles[1].description}</td>
//                             </tr> */}
//                         </tbody>
//                     </table>
//                 </div>
//             </div>
//         )
//     }
// }

// class WelcomeComponent extends Component{
//     render(){
//         return(
//             <div>
//                 <h1>Welcome!</h1>
//                 <div className="conatiner">
//                     Logged in. Welcome {this.props.match.params.name} to the app. Manage castles <Link to="/castles">here</Link>.
//                 </div>
//             </div>

//             // <div>
//             //     <p>This is the welcome page. Welcome {this.props.match.params.name}</p>
//             //     <p>View castles <Link to="/castles">here</Link></p>

//             // </div>
//         )
//     }
// }

// class HeaderComponent extends Component{
//     render(){

//         const userIsLoggedIn = AuthenticationService.isUserLoggedIn() //true or false

//         return(
//             <header>
//                 <nav className="navbar navbar-expand-md navbar-dark bg-dark">
//                     <div><a href="https://github.com/martin-nolan-2020">Github</a></div>
//                         <ul className="navbar-nav">
//                             {/* && operator can be used for conditional rendering as done here */}
//                             {/* so if userIsLoggedIn is false nothing is shown, but Link is shown if true */}
//                             {userIsLoggedIn && <li><Link to="/welcome/un" className="nav-link">Home</Link></li>}
//                             {userIsLoggedIn && <li><Link to="/castles" className="nav-link">Castles</Link></li>}
//                         </ul>
//                         <ul className="navbar-nav navbar-collapse justify-content-end">
//                             {/* when userIsLoggedIn is true then need to use ! to make it false and hide Link */}
//                             {!userIsLoggedIn && <li><Link to="/login" className="nav-link">Login</Link></li>}
//                             {userIsLoggedIn && <li><Link to="/logout" className="nav-link" 
//                                     onClick={AuthenticationService.registerSuccessfulLogout}>Logout</Link></li>}
//                                 {/* do NOT include brackets after registerSuccessfulLogout as we want method mapping
//                                 and not a method call i.e. registerSuccessfulLogout() --> WRONG */}
                            
//                         </ul>
//                 </nav>
//             </header>
//             // <div>
//             //     This is the header component
//             //     <hr></hr>
//             // </div>
//         )


//         // // if user is NOT logged in...
//         // if(!AuthenticationService.isUserLoggedIn()){
//         //     return(
//         //         <header>
//         //             <nav className="navbar navbar-expand-md navbar-dark bg-dark">
//         //                 <div><a href="https://github.com/martin-nolan-2020">Github</a></div>
//         //                     <ul className="navbar-nav">
//         //                         <li><Link to="/welcome/un" className="nav-link">Home</Link></li>
//         //                         <li><Link to="/castles" className="nav-link">Castles</Link></li>
//         //                     </ul>
//         //                     <ul className="navbar-nav navbar-collapse justify-content-end">
//         //                         <li><Link to="/login" className="nav-link">Login</Link></li>
//         //                         {/* <li><Link to="/logout" className="nav-link" 
//         //                                 onClick={AuthenticationService.registerSuccessfulLogout}>Logout</Link></li> */}
//         //                             {/* do NOT include brackets after registerSuccessfulLogout as we want method mapping 
//         //                             and not a method call i.e. registerSuccessfulLogout() --> WRONG */}
//         //                     </ul>
//         //             </nav>
//         //         </header>
//         //         // <div>
//         //         //     This is the header component
//         //         //     <hr></hr>
//         //         // </div>
//         //     )
//         // } else{
//         //     // if user IS logged in...
//         //     return(
//         //         <header>
//         //             <nav className="navbar navbar-expand-md navbar-dark bg-dark">
//         //                 <div><a href="https://github.com/martin-nolan-2020">Github</a></div>
//         //                     <ul className="navbar-nav">
//         //                         <li><Link to="/welcome/un" className="nav-link">Home</Link></li>
//         //                         <li><Link to="/castles" className="nav-link">Castles</Link></li>
//         //                     </ul>
//         //                     <ul className="navbar-nav navbar-collapse justify-content-end">
//         //                         {/* <li><Link to="/login" className="nav-link">Login</Link></li> */}
//         //                         <li><Link to="/logout" className="nav-link" 
//         //                                 onClick={AuthenticationService.registerSuccessfulLogout}>Logout</Link></li>
//         //                             {/* do NOT include brackets after registerSuccessfulLogout as we want method mapping 
//         //                             and not a method call i.e. registerSuccessfulLogout() --> WRONG */}
//         //                     </ul>
//         //             </nav>
//         //         </header>
//         //         // <div>
//         //         //     This is the header component
//         //         //     <hr></hr>
//         //         // </div>
//         //     )
//         // }

//         // return(
//         //     <header>
//         //         <nav className="navbar navbar-expand-md navbar-dark bg-dark">
//         //             <div><a href="https://github.com/martin-nolan-2020">Github</a></div>
//         //                 <ul className="navbar-nav">
//         //                     <li><Link to="/welcome/un" className="nav-link">Home</Link></li>
//         //                     <li><Link to="/castles" className="nav-link">Castles</Link></li>
//         //                 </ul>
//         //                 <ul className="navbar-nav navbar-collapse justify-content-end">
//         //                     <li><Link to="/login" className="nav-link">Login</Link></li>
//         //                     <li><Link to="/logout" className="nav-link" 
//         //                             onClick={AuthenticationService.registerSuccessfulLogout}>Logout</Link></li>
//         //                         {/* do NOT include brackets after registerSuccessfulLogout as we want method mapping 
//         //                         and not a method call i.e. registerSuccessfulLogout() --> WRONG */}
//         //                 </ul>
//         //         </nav>
//         //     </header>
//         //     // <div>
//         //     //     This is the header component
//         //     //     <hr></hr>
//         //     // </div>
//         // )
//     }
// }

// class FooterComponent extends Component{
//     render(){
//         return(
//             <footer className="footer">
//                 <span className="text-muted">All Rights Reserved</span>

//             </footer>
//             // <div>
//             //     <hr></hr>
//             //     This is the footer component    
//             // </div>
//         )
//     }
// }

// class LogoutComponent extends Component{
//     render(){
//         return(
//             <div>
//                 <h1>You have successfully logged out.</h1>
//                 <div className="container">Thank you.</div>
//             </div>
//         )
//     }
// }


// function ErrorComponent(){
//     return(
//         <div>An error has occurred</div>
//     )
// }

// class LoginComponent extends Component{
//     constructor(props){
//         super(props)
//         this.state = {
//             username: "",
//             password: "",
//             loginFailed: false,
//             showSuccessMsg: false 
//         }

//         // this.handleUnameChange = this.handleUnameChange.bind(this)
//         // this.handlePWChange = this.handlePWChange.bind(this)
//         this.handleChange = this.handleChange.bind(this)
//         this.loginClicked = this.loginClicked.bind(this)
//     }

//     render(){
//         return(
//             <div>      
//                 <h1>Login</h1>
//                 <div className="container">
//                     Username: <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
//                     Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
//                     <button className="btn btn-success" onClick={this.loginClicked}>Login</button>

//                     {/* && operator can be used for conditional rendering as done here */}
//                     {this.state.loginFailed && <div className="alert alert-warning">A bad login!</div>}
//                     {this.state.showSuccessMsg && <div>A successful login!</div>}
//                     {/* <ShowInvalidLogin loginFailed={this.state.loginFailed}/>
//                     <ShowValidLogin showSuccessMsg={this.state.showSuccessMsg}/> */}
//                 </div>
//             </div>
//         )
//     }

//     //want to handle all changes - so create a generic function
//     //name="username" in render method --> Username --> input type must match constructor(props) --> this.state.username.
//     //"username"==="username" and "password"==="password" so both work 
//     handleChange(event){
//         console.log("event.target.name --> " + event.target.name + "; event.target.value --> "+ event.target.value)
//         this.setState(
//             {
//                 //square brakcets needed for name of object variable, which is a constant
//                 [event.target.name]: 
//                     event.target.value
//             }
//         )
//     }

//     loginClicked(){
//         if(this.state.username==="un" && this.state.password==="pw"){
//             console.log("Good username and password")
//             AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password)
//             // redirect Routing to welcome page:
//             this.props.history.push(`/welcome/${this.state.username}`)

//             // this.setState({showSuccessMsg:true})
//             // this.setState({loginFailed:false})
//             console.log(this.state.showSuccessMsg)
//         } else{
//             console.log("Bad username and password")
//             this.setState({showSuccessMsg:false})
//             this.setState({loginFailed:true})
//         }
//     }
// }

// // function ShowInvalidLogin(props){
// //     if(props.loginFailed){
// //         return <p>Bad login!</p>
// //     } else return null
// // }

// // function ShowValidLogin(props){
// //     if(props.showSuccessMsg){
// //         return <p>Successful Login</p>
// //     } else return null
// // }

export default CastleApp;
