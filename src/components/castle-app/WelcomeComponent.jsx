import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import HelloWorldService from '../../api/castles/HelloWorldService.js'
import CastleBeanService from '../../api/castles/CastleBeanService.js'


class WelcomeComponent extends Component{

    constructor(props){
        super(props)
        this.state = {
            showWelcomeMessage: false,
            backendMessage: "XXX",
            castleBean: ""
        }

        this.retrieveWelcomeMessage = this.retrieveWelcomeMessage.bind(this)
        this.handleSuccessfulResponse = this.handleSuccessfulResponse.bind(this)
        this.retrieveCastleBean = this.retrieveCastleBean.bind(this)
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


                    {/* {this.state.showWelcomeMessage && <p>thanks for clicking above - welcome. {this.state.backendMessage}</p>} */}
                </div>

                <div className="container">
                    {this.state.backendMessage}
                </div>

                <div className="container">
                    Click for a Castle Bean --&gt;  
                    <button onClick={this.retrieveCastleBean} className="btn btn-success">BEAN</button>


                    {/* {this.state.showWelcomeMessage && <p>thanks for clicking above - welcome. {this.state.backendMessage}</p>} */}
                </div>

                <div className="container">
                    {this.state.castleBean}
                </div>
            </div>

            // <div>
            //     <p>This is the welcome page. Welcome {this.props.match.params.name}</p>
            //     <p>View castles <Link to="/castles">here</Link></p>

            // </div>
        )
    }

    retrieveCastleBean(){

        CastleBeanService.executeCastleBeanService()
        //.then(response => console.log(response))
        .then(response => this.setState({castleBean:response.data.description}))
    }

    retrieveWelcomeMessage(){
        // return "hello"
        console.log("retrieveWelcomeMessage clicked")

        //here we get a Promise back from HelloWorldService.
        //can define what to do if request successful with .then()
        //can define what to do if request fails with .catch()
        HelloWorldService.executeHelloWorldService()

        //need to define a method call if successful
        //.then(response => console.log(response))
        .then(response => this.setState({backendMessage:response.data}))
        //.catch()


        // if(this.state.showWelcomeMessage===false){
        //     this.setState({showWelcomeMessage:true})
        // } else{
        //     this.setState({showWelcomeMessage:false})
        // }
    }

    handleSuccessfulResponse(response){
        this.setState({backendMessage:response.data})
    }
}

export default WelcomeComponent