import axios from "axios"

class CastleDataService{

    retrieveAllCastles(){
        // console.log("inside --> CastleDataService.executeCastleDataService")
        // console.log(axios.get(`http://localhost:8765/castles`))
        return axios.get(`http://localhost:8765/castles`)
    } 
}

export default new CastleDataService();