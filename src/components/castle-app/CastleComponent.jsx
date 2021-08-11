import React, {Component} from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import CastleDataService from '../../api/castles/CastleDataService'

class CastleComponent extends Component{
    constructor(props){
        super(props)
        this.state = {
            id:this.props.match.params.id,
            description: "",
            price:0
        }

        this.onSubmit = this.onSubmit.bind(this)
    }

    componentDidMount(){

        if(this.state.id==-1){ //castle fdoes not exist so don't make a GET request
            return
        }

        CastleDataService.retrieveCastleById(this.state.id)     //castle does exist
            //.then(response => console.log(response.data))
            .then(response => this.setState({description:response.data.description,
                                                price:response.data.price}))
    }

    onSubmit(values){
        console.log("onSubmit")
        console.log(values)

        if(this.state.id===-1){
            CastleDataService.addACastle({
                id:this.state.id,
                description:values.description,
                price:values.price
            }).then(() => this.props.history.push('/castles'))
        } else{
            CastleDataService.updateACastle(this.state.id,{
                id:this.state.id,
                description:values.description,
                price:values.price
            }).then(() => this.props.history.push('/castles')) //take the user back to the list of all Castles
            //CastleDataService.retrieveCastleById
        }


        
    }

    validate(values){
        console.log("validate")
        //let error = {description:"Should have at least 5 letters"}
        let error = {}
        if(!values.description){
            error.description="Enter a description"
        } else if(values.description.length<5){
            error.description="Enter a longer description"
        }

        if(values.price<=0){
            error.price="Enter a price greater than 0"
        }
        console.log(values)
        console.log(error)
        return error
    }

    render(){
        let description = this.state.description
        let price = this.state.price

        return(
            <div>
                <div>The castleComponent for {this.props.match.params.id}</div>
                <h1>Castle</h1>
                <div className="container">
                    <Formik
                        initialValues={{
                            description:description,
                            price:price
                        }}
                        onSubmit={this.onSubmit}
                        validateOnBlur={false}
                        validateOnChange={false}
                        validate={this.validate}
                        enableReinitialize={true}
                    >
                        {
                            (props) => (
                                <Form>
                                    <ErrorMessage name="description" component="div" className="alert alert-warning"></ErrorMessage>
                                    <ErrorMessage name="price" component="div" className="alert alert-warning"></ErrorMessage>
                                    <fieldset className="form-group">
                                        <label>Description</label>
                                        <Field className="form-control" type="text" name="description" />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Price</label>
                                        <Field className="form-control" type="number" name="price"/>
                                    </fieldset>
                                    <button className="btn btn-success" type="submit">Save</button>
                                </Form>
                            )
                        }
                    </Formik>
                </div>
                

            </div>
        )
    }
}

export default CastleComponent