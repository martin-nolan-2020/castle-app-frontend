import React, {Component} from 'react'
import { withRouter } from 'react-router';
import {BrowserRouter as Link} from 'react-router-dom'
import AuthenticationService from './AuthenticationService.js'


class HeaderComponent extends Component{
    render(){

        const userIsLoggedIn = AuthenticationService.isUserLoggedIn() //true or false

        return(
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a href="https://github.com/martin-nolan-2020">Github</a></div>
                        <ul className="navbar-nav">
                            {/* && operator can be used for conditional rendering as done here */}
                            {/* so if userIsLoggedIn is false nothing is shown, but Link is shown if true */}
                            {userIsLoggedIn && <li><Link to="/welcome/un" className="nav-link">Home</Link></li>}
                            {userIsLoggedIn && <li><Link to="/castles" className="nav-link">Castles</Link></li>}
                        </ul>
                        <ul className="navbar-nav navbar-collapse justify-content-end">
                            {/* when userIsLoggedIn is true then need to use ! to make it false and hide Link */}
                            {!userIsLoggedIn && <li><Link to="/login" className="nav-link">Login</Link></li>}
                            {userIsLoggedIn && <li><Link to="/logout" className="nav-link" 
                                    onClick={AuthenticationService.registerSuccessfulLogout}>Logout</Link></li>}
                                {/* do NOT include brackets after registerSuccessfulLogout as we want method mapping
                                and not a method call i.e. registerSuccessfulLogout() --> WRONG */}
                            
                        </ul>
                </nav>
            </header>
            // <div>
            //     This is the header component
            //     <hr></hr>
            // </div>
        )


        // // if user is NOT logged in...
        // if(!AuthenticationService.isUserLoggedIn()){
        //     return(
        //         <header>
        //             <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        //                 <div><a href="https://github.com/martin-nolan-2020">Github</a></div>
        //                     <ul className="navbar-nav">
        //                         <li><Link to="/welcome/un" className="nav-link">Home</Link></li>
        //                         <li><Link to="/castles" className="nav-link">Castles</Link></li>
        //                     </ul>
        //                     <ul className="navbar-nav navbar-collapse justify-content-end">
        //                         <li><Link to="/login" className="nav-link">Login</Link></li>
        //                         {/* <li><Link to="/logout" className="nav-link" 
        //                                 onClick={AuthenticationService.registerSuccessfulLogout}>Logout</Link></li> */}
        //                             {/* do NOT include brackets after registerSuccessfulLogout as we want method mapping 
        //                             and not a method call i.e. registerSuccessfulLogout() --> WRONG */}
        //                     </ul>
        //             </nav>
        //         </header>
        //         // <div>
        //         //     This is the header component
        //         //     <hr></hr>
        //         // </div>
        //     )
        // } else{
        //     // if user IS logged in...
        //     return(
        //         <header>
        //             <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        //                 <div><a href="https://github.com/martin-nolan-2020">Github</a></div>
        //                     <ul className="navbar-nav">
        //                         <li><Link to="/welcome/un" className="nav-link">Home</Link></li>
        //                         <li><Link to="/castles" className="nav-link">Castles</Link></li>
        //                     </ul>
        //                     <ul className="navbar-nav navbar-collapse justify-content-end">
        //                         {/* <li><Link to="/login" className="nav-link">Login</Link></li> */}
        //                         <li><Link to="/logout" className="nav-link" 
        //                                 onClick={AuthenticationService.registerSuccessfulLogout}>Logout</Link></li>
        //                             {/* do NOT include brackets after registerSuccessfulLogout as we want method mapping 
        //                             and not a method call i.e. registerSuccessfulLogout() --> WRONG */}
        //                     </ul>
        //             </nav>
        //         </header>
        //         // <div>
        //         //     This is the header component
        //         //     <hr></hr>
        //         // </div>
        //     )
        // }

        // return(
        //     <header>
        //         <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        //             <div><a href="https://github.com/martin-nolan-2020">Github</a></div>
        //                 <ul className="navbar-nav">
        //                     <li><Link to="/welcome/un" className="nav-link">Home</Link></li>
        //                     <li><Link to="/castles" className="nav-link">Castles</Link></li>
        //                 </ul>
        //                 <ul className="navbar-nav navbar-collapse justify-content-end">
        //                     <li><Link to="/login" className="nav-link">Login</Link></li>
        //                     <li><Link to="/logout" className="nav-link" 
        //                             onClick={AuthenticationService.registerSuccessfulLogout}>Logout</Link></li>
        //                         {/* do NOT include brackets after registerSuccessfulLogout as we want method mapping 
        //                         and not a method call i.e. registerSuccessfulLogout() --> WRONG */}
        //                 </ul>
        //         </nav>
        //     </header>
        //     // <div>
        //     //     This is the header component
        //     //     <hr></hr>
        //     // </div>
        // )
    }
}

export default withRouter(HeaderComponent)
//withRouter allows header to update without having to refresh browser, after each new page is clicked