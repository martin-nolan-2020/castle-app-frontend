import React, {useEffect, useState} from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import moment from 'moment'
import CastleDataService from '../../api/castles/CastleDataService'
import { subDays, addDays } from 'date-fns'


const MakeBookingComponent = (props) => {
    const [selectedDate, setSelectedDate] = useState(new Date()) 
    // let today = new Date()
    // let highlightedDates=[{addDays(new Date(),1}]

    const [bookingDates, setBookingDates] = useState({})
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        getTheBookings();
    }, []);

    const getTheBookings = () => {
        CastleDataService.getAllBookings()
        //.then(response => console.log(response.data))
        .then(response => {setBookingDates(response.data);
                            setLoading(false);
                            console.log(response.data);
                            
                           }
             )
    }

    let array = [
            // new Date('2021/08/24'),
            // new Date('2021/08/23'),
            // new Date('2021/08/20'),
      ];

    //   CastleDataService.getAllBookings()
    //     .then(response => console.log(response.data))
        //.then(response => array=response.data)
        //.then(response => for(let index = 0; index < array.length; index++) {})




return (
    <div className="white-box p-20">
        {(() => {      


            let highlight = [
                // new Date('2021/08/27'),
                // new Date('08/21/2021'),
                // //new Date('08/21/2021'),
                // //subDays(new Date(), 7),
                // new Date('2021-08-13'),
                // addDays(new Date(), 7),
                // new Date()
                //new Date('08/13/2021'),
                
                // {'08/28/2021'},
                // {'08/28/2021'}
            ];

            // for (let index = 0; index < array.length; index++) {
            //     highlight.push(array.dateBooked[index]);
            //     console.log("highlight --- " + highlight)
            // }

            for (let index = 0; index < bookingDates.length; index++) {
                if(bookingDates[index].castle_id==props.match.params.id){
                    highlight.push(new Date(bookingDates[index].dateBooked));
                }
                console.log("highlight --- " + highlight)
            }


            
            if(!isLoading)
            {
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
                            highlightDates={highlight}
                            disabledKeyboardNavigation
                            //highlightDates={[highlight]}
                            inline
                        />
                        <br></br>
                        <br></br>
                        <button className="btn btn-success" onClick={() => makeBookingForCastleClicked(props.match.params.id,selectedDate,bookingDates)}>Make Booking for Castle ID: {props.match.params.id} </button>
                    </div>
                )
            } else{
                return(
                    <div>
                        <h1>Loading...</h1>
                    </div>
                )
            }
        })()}
    </div>
);


}

function makeBookingForCastleClicked(id,selectedDate,bookingDates){
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
    let backendFormattedDate = fullYear+"-"+monthOfYear+"-"+dayOfMonth
    console.log("backendFormattedDate --> " + backendFormattedDate)

    console.log(bookingDates)

    CastleDataService.addABooking(id,backendFormattedDate)
        .then(response => console.log(response))
}

export default MakeBookingComponent