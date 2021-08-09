import React, {Component} from 'react'
import CastleDataService from '../../api/castles/CastleDataService'


// //const express = require("express")
// const app = express()
// const cors = require("cors")
// app.use(
//     cors({
//         origin:"http://localhost:4200"
//     })
// )

class ListCastlesComponent extends Component{



    constructor(props){
        super(props)
        this.state = {
            message: null,
            castles : 
            [
                {id:1, description: "Hard coded into frontend", length: 99, price: 999},
                // {id:2, description: "Blue castle", length: 50, price: 180},
                // {id:3, description: "Green castle", length: 45, price: 160},
            ],
        }

        this.deleteCastle = this.deleteCastle.bind(this)
        this.refreshCastleList = this.refreshCastleList.bind(this)
    }
    
    // The componentDidMount() method allows us to execute the React code when the component is already placed 
    // in the DOM (Document Object Model). This method is called during the Mounting phase of the React Life-cycle 
    // i.e after the component is rendered
    componentDidMount(){
        //CastleDataService.retrieveAllCastles().
        CastleDataService.retrieveAllCastles()
            //.then(response => console.log(response.data))    
            .then(response => this.setState({castles:response.data}))

    }

    deleteCastle(id){
        console.log('id -> ' + id)
        CastleDataService.deleteCastleById(id)
            //.then(response => console.log(response))
            .then(
                response => {
                    this.setState({message:`Delete of Castle ID ${id} was successful`});
                    this.refreshCastleList()
                }
            )
    }

    refreshCastleList(){
        CastleDataService.retrieveAllCastles()
            .then(
                response => {
                    this.setState({castles: response.data})
                }
            )
    }

    render(){
            
        return(
            <div>
                <h1>List of Castles</h1>
                {this.state.message && <div className="alert alert-success">{this.state.message}</div>}
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>delete</th>
                                <th>Description</th>
                                <th>Length</th>
                                <th>Price</th>
                                <th>Name</th>
                                {/* <th>Notes</th> */}
                            </tr>
                        </thead>
                        {/* loop through each castle and display it in a table row <tr></tr> */}
                        <tbody>
                            
                            {
                                this.state.castles.map(
                                    element => 
                                        // add key to remove console warning:
                                        // Warning: Each child in a list should have a unique "key" prop.
                                        <tr key={element.id}>
                                            <td>{element.id}</td>
                                            <td><button className="btn btn-warning" onClick={() => this.deleteCastle(element.id)} >delete</button></td>
                                            <td>{element.description}</td>
                                            <td>{element.length}</td>
                                            <td>{element.price}</td>
                                            <td>{element.name}</td>
                                            {/* <td> 
                                                {
                                                    element.notes.map(
                                                        innerElement =>
                                                        <td>{innerElement.info}</td>
                                                    )
                                                }
                                             </td> */}
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
            </div>
        )
    }
}

export default ListCastlesComponent