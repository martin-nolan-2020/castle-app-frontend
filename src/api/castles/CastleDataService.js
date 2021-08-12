import axios from "axios"


// let config = {
//     headers: {'Access-Control-Allow-Origin': 'http://localhost:4200',
//                 'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS'}
// }

class CastleDataService{

    

    retrieveAllCastles(){
        // console.log("inside --> CastleDataService.executeCastleDataService")
        // console.log(axios.get(`http://localhost:8765/castles`))
        return axios.get(`http://localhost:8765/castles`)
    } 

    deleteCastleById(id){
        return axios.delete(`http://localhost:8765/castles/${id}`)

        //return axios.delete(`https://vast-escarpment-00752.herokuapp.com/http://localhost:8765/castles/${id}`)
        //https://stackoverflow.com/questions/43871637/no-access-control-allow-origin-header-is-present-on-the-requested-resource-whe

        //return axios.delete(`http://localhost:8765/castles/${id}`,config)
        // return axios.delete(`http://localhost:8765/castles/${id}`,
        //                         {headers: {'Access-Control-Allow-Origin': '*',
        //                                     // 'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        //                                     'Content-Type': 'application/json;charset=UTF-8',
        //                                  }
        //                         }
        //                     )
    }

    retrieveCastleById(id){
        return axios.get(`http://localhost:8765/castles/${id}`)
    }

    updateACastle(id, castle){
        //below works when directly interacting with castleManager microservice on port 8100
        //return axios.put(`http://localhost:8100/castles/${id}`, castle)

        //going through the API gateway i.e. port 8765 does not work for PUT (same problem as delete)
        //Console output:
        //2:1 Access to XMLHttpRequest at 'http://localhost:8765/castles/2' from origin 'http://localhost:4200' has
        // been blocked by CORS policy: Response to preflight request doesn't pass access control check: 
        //No 'Access-Control-Allow-Origin' header is present on the requested resource.
        return axios.put(`http://localhost:8765/castles/${id}`, castle)
    }

    addACastle(castle){
        return axios.post(`http://localhost:8765/castles`, castle)
    }

    checkIfCastleBookedByDate(id, date){
        //return axios.get(`http://localhost:8765/castles-with-bookings-feign/${id}/date/${date}`)
        console.log(date)
        return axios.get(`http://localhost:8765/castles-with-bookings-feign/${id}/date/${date}`)
    }

    addABooking(castleId,date){
        return axios.post(`http://localhost:8765/bookings/castle-id/${castleId}/date/${date}`)
                            //http://localhost:8765/bookings/castle-id/3/date/2021-08-17
    }

    getAllBookings(){
        return axios.get(`http://localhost:8765/bookings`)
    }
}

export default new CastleDataService();