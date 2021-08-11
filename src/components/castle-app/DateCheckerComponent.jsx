import React, {useState} from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import moment from 'moment'
import CastleDataService from '../../api/castles/CastleDataService'


const DateCheckerComponent = (props) => {
    const [selectedDate, setSelectedDate] = useState(new Date()) 

    return (
        <div>
            <h1>Bookings Checker</h1>
            <br></br>
            <DatePicker
                selected={selectedDate}
                onChange={date => setSelectedDate(date)}
                //onChange={date => console.log(date)}
                dateFormat='dd/MM/yyyy'
                minDate={new Date()}
                isClearable
                showYearDropdown
                scrollableYearDropdown
            />
            <br></br>
            <br></br>
            <button className="btn btn-success" onClick={() => checkDateForCastleClicked(props.match.params.id,selectedDate)}>Check if Castle with ID {props.match.params.id} is booked</button>
        </div>
    )


}

function checkDateForCastleClicked(id,selectedDate){
    console.log("checkDateForCastleClicked--> id --> " + id)
    //let yearMonthDay = selectedDate.
    let dayOfMonth = selectedDate.getDate()
    let monthOfYear = selectedDate.getMonth()+1
    if(monthOfYear<10) monthOfYear = "0"+monthOfYear
    let fullYear = selectedDate.getFullYear()
    console.log("selectedDate --> " + selectedDate)
    console.log("dayOfMonth --> " + dayOfMonth)
    console.log("monthOfYear --> " + monthOfYear)
    console.log("fullYear --> " + fullYear)
    let backendFormattedTime = fullYear+"-"+monthOfYear+"-"+dayOfMonth
    console.log("backendFormattedTime --> " + backendFormattedTime)

    CastleDataService.checkIfCastleBookedByDate(id,backendFormattedTime)
        .then(response => console.log(response))
}

export default DateCheckerComponent