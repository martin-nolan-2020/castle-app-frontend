import React, {Component} from 'react'
import {Link} from 'react-router-dom'


class WelcomeComponent extends Component{

    constructor(props){
        super(props)
        this.state = {
            showWelcomeMessage: false
        }

        this.retrieveWelcomeMessage = this.retrieveWelcomeMessage.bind(this)
    }

    


    render(){
        return(
            <div>
                <h1>Welcome!</h1>
                <div className="container">
                    Logged in. Welcome {this.props.match.params.name} to the app. Manage castles <Link to="/castles">here</Link>.
                </div>
                <br></br>

                <div className="container">
                    Click for a customised welcome message --&gt;  
                    <button onClick={this.retrieveWelcomeMessage} className="btn btn-success">here</button>
                    {this.state.showWelcomeMessage && <p>thanks for clicking above - welcome.</p>}
                </div>
            </div>

            // <div>
            //     <p>This is the welcome page. Welcome {this.props.match.params.name}</p>
            //     <p>View castles <Link to="/castles">here</Link></p>

            // </div>
        )
    }

    retrieveWelcomeMessage(){
        // return "hello"
        console.log("retrieveWelcomeMessage clicked")
        if(this.state.showWelcomeMessage===false){
            this.setState({showWelcomeMessage:true})
        } else{
            this.setState({showWelcomeMessage:false})
        }
    }
}

export default WelcomeComponent