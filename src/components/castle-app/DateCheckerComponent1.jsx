import React, {Component} from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import CastleDataService from '../../api/castles/CastleDataService'

import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';

class DateCheckerComponent extends Component{
    constructor(props){
        super(props)
        this.state = {
            id:this.props.match.params.id,
            description: "",
            price:0,
            startDate:moment()
            //startDate: moment(project.startDate)

        }

        this.onSubmit = this.onSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleDateSelect = this.handleDateSelect.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this);

    }

//const DateCheckerComponent = () =>{

    componentDidMount(){

        if(this.state.id==-1){ //castle fdoes not exist so don't make a GET request
            return
        }

        // CastleDataService.retrieveCastleById(this.state.id)     //castle does exist
        //     //.then(response => console.log(response.data))
        //     .then(response => this.setState({description:response.data.description,
        //                                         price:response.data.price}))
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

    handleDateSelect(value){
        console.log(value)
    }

    handleChange(date) {
        this.setState({
          startDate: date
        })
      }
      handleSubmit(e) {
        e.preventDefault();
        let main = this.state.startDate
        //console.log(main.format('L'));
        console.log(main)
      }

    
    render(){
        let description = this.state.description
        let price = this.state.price
        //const [startDate, setStartDate] = useState(new Date());
        //let startDate = 

        //, setStartDate] = useState(new Date());
        this.state = {startDate: new Date()}

        return(
            <div>
                <div>The DateCheckerComponent for {this.props.match.params.id}</div>
                <h1>Castle</h1>
                <form onSubmit={ this.handleSubmit }>
                    <DatePicker 
                                // selected={this.state.startDate} 
                                // onChange={this.handleDateChange}
                                // //onChange={date => this.setState({date})} 
                                // //onSelect={this.handleDateSelect} //when day is clicked
                                // name="startDate"
                                // dateFormat="dd/MM/yyyy"

                                todayButton={"Today"}
                            //dateFormat="DD/MM/YYYY"
                            selected={this.state.startDate}
                            value={this.state.startDate}
                            onChange={(newDate) => this.setState({ startDate: newDate })}
                    
                    />
                    <div className="form-group">
                        <button className="btn btn-success">Add Date</button>
                    </div>
                </form>
                {/* <div className="container">
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
                </div> */}

{/* <Formik
          initialValues={{ startDate: new Date() }}
          validate={(props, a) => console.log('a',props, a)}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}

        >
          {({ isSubmitting, values, setFieldValue }) => (
            <div className="row clearfix">
              <div className="header">
              </div>
              <Form>
                <div className="row ml-4 mr-4">
                  <div className="form-group col-3 mb-2">
                    <DatePicker 
                      selected={values.startDate}
                      dateFormat="MMMM d, yyyy"
                      className="form-control"
                      name="startDate"
                      onChange={date => setFieldValue('startDate', date)}
                    />
                  </div>

                </div>
                <div className="row mb-3">
                  <div className="col-5 mb-4"></div>
                  <button type="submit" className="btn btn-lg btn-outline-success mt-4 mb-4" disabled={isSubmitting}>insert item</button>
                </div>
              </Form>
            </div>
          )}
        </Formik> */}

            {/* <DatePicker
                  inline
                  selected={this.state.date}
                  onChange={this.dateChanged}
                  filterDate={this.isWeekday}
            /> */}

           
                

            </div>
        )
    }
}

export default DateCheckerComponent