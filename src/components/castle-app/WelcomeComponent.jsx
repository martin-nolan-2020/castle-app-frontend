import React, {Component} from 'react'
import {BrowserRouter as Link} from 'react-router-dom'


class WelcomeComponent extends Component{
    render(){
        return(
            <div>
                <h1>Welcome!</h1>
                <div className="conatiner">
                    Logged in. Welcome {this.props.match.params.name} to the app. Manage castles <Link to="/castles">here</Link>.
                </div>
            </div>

            // <div>
            //     <p>This is the welcome page. Welcome {this.props.match.params.name}</p>
            //     <p>View castles <Link to="/castles">here</Link></p>

            // </div>
        )
    }
}

export default WelcomeComponent