import React, {Component} from 'react'

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
                <div className="container">
                    <table className="table">
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
                                        // add key to remove console warning:
                                        // Warning: Each child in a list should have a unique "key" prop.
                                        <tr key={element.id}>
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
            </div>
        )
    }
}

export default ListCastlesComponent