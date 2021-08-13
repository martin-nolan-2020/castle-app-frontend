import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import HelloWorldService from '../../api/castles/HelloWorldService.js'
import CastleBeanService from '../../api/castles/CastleBeanService.js'
import CastleBeanPathVariableService from '../../api/castles/CastleBeanPathVariableService.js'


class WelcomeComponent extends Component{

    constructor(props){
        super(props)
        this.state = {
            showWelcomeMessage: false,
            showSomethingWentWrong: false,
            backendError: "",
            backendMessage: "XXX",
            castleBeanDesc: "",
            price: "",
            id: ""
        }

        this.retrieveWelcomeMessage = this.retrieveWelcomeMessage.bind(this)
        this.handleSuccessfulResponse = this.handleSuccessfulResponse.bind(this)
        this.retrieveCastleBean = this.retrieveCastleBean.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.retrieveCastleBeanPathVariableService = this.retrieveCastleBeanPathVariableService.bind(this)
        this.handleError = this.handleError.bind(this)
    }

    render(){
        return(
            <div>
                <h1>Welcome!</h1>
                {this.state.showSomethingWentWrong && <div className="alert alert-warning">{this.state.backendError}</div>}
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
                <br></br>
               
                <input type="text" name="id" value={this.state.id} onChange={this.handleChange}/>
                <button className="btn btn-success" onClick={this.retrieveCastleBeanPathVariableService}>Get Castle DESCRIPTION by id</button>
                
                <div className="container">
                    {this.state.castleBeanDesc}
                </div>

            </div>
            
            // <div>
            //     <p>This is the welcome page. Welcome {this.props.match.params.name}</p>
            //     <p>View castles <Link to="/castles">here</Link></p>

            // </div>
        )
    }

    handleChange(event){
        console.log("event.target.name --> " + event.target.name + "; event.target.value --> "+ event.target.value)
        this.setState(
            {
                //square brakcets needed for name of object variable, which is a constant
                [event.target.name]: 
                    event.target.value
            }
        )
        //console.log(this.state.id)
    }

    retrieveCastleBeanPathVariableService(){
        CastleBeanPathVariableService.executeCastleBeanService(this.state.id)
        .then(response => this
            .setState({castleBeanDesc:response.data.description})
            //.setState({price:response.data.price})
        )
        .then(response => console.log(response))
        .then(response => this
            .setState({showSomethingWentWrong:false})
        )
        .catch(error =>  this.handleError(error))
        
    }

    //.setState({castleBeanDesc:this.state.castleBeanDesc+" (for a hard coded date of 2017-02-23)"})

    handleError(error){
        let errorMessage = ''

        //produces 'error: --> Error: Network Error' if it cannot connect to backend
        console.log("error: --> " + error)
        console.log("error.response: --> " + error.response)
        console.log("error.message: --> " + error.message)
        //produces true if it cannot connect to backend
        console.log(error.response==null)
        //this.setState({backendError:error.response.data.msg+" (for a hard coded date of 2017-02-23)"})

        //connecting to backend ok:
        if(error.response!=null){
            console.log("not null!")
            this.setState({backendError:error.response.data.msg+" (for a hard coded date of 2017-02-23)"})
            this.setState({showSomethingWentWrong:true})
            this.setState({castleBeanDesc:""})
            this.setState({castleBeanDesc:""})
            if(error.response.data){
                errorMessage+=error.response.data.message
            }
        } 
        //not connecting to backend ok
        //else{
            if(error.message){
                errorMessage+=error.message
            }
            console.log("is null!")
        //}
        this.setState({castleBeanDesc:errorMessage})
        // console.log(error.response.data.msg)
        // this.setState({backendError:error.response.data.msg+" (for a hard coded date of 2017-02-23)"})
        // this.setState({showSomethingWentWrong:true})
        // this.setState({castleBeanDesc:""})
        // this.setState({castleBeanDesc:""})
    }

    retrieveCastleBean(){

        CastleBeanService.executeCastleBeanService()
        //.then(response => console.log(response))
        //only going to set description in State for this example because data is a JSON object with many fields e.g. price, width
        .then(response => this
                            .setState({castleBeanDesc:response.data.description})
                            //.setState({price:response.data.price})
              )
        // .then(response => this.setState({price:response.data.price}))
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