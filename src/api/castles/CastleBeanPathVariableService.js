//connecting to backend Spring Boot API

import axios from "axios";

//want to access this REST endpoint which is in castlemanager/controllers/CastleController.java
//return a specific castle by id
// @GetMapping("castles/{id}")
// public Optional<Castle> getCastleById(@PathVariable Integer id) throws RuntimeException {
//................
//................
//}


class CastleBeanPathVariableService{

    executeCastleBeanService(id){
        let username = "username"
        let password = "pw1"

        let basicAuthHeader = 'Basic ' + window.btoa(username + ":" + password)

        // direct call to the CastleManager microservice on port 8100
        console.log("executeCastleBeanPathVariableService");

        //returns a Promise
        return axios.get(`http://localhost:8765/castles/${id}`,
            {
                headers:{
                    authorization: basicAuthHeader
                }
            }                
        )
        //http://localhost:8765/castles-with-bookings-feign/1/date/2017-02-23
        //return axios.get(`http://localhost:8765/castles-with-bookings-feign/${id}/date/2017-02-23`)
    }

}


//any package that imports this class will get an instance due to "new" creating an object
export default new CastleBeanPathVariableService();