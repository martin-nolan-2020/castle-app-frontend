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
        //return axios.delete(`http://localhost:8765/castles/${id}`)
        return axios.delete(`https://vast-escarpment-00752.herokuapp.com/http://localhost:8765/castles/${id}`)
        //return axios.delete(`http://localhost:8765/castles/${id}`,config)
        // return axios.delete(`http://localhost:8765/castles/${id}`,
        //                         {headers: {'Access-Control-Allow-Origin': '*',
        //                                     // 'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        //                                     'Content-Type': 'application/json;charset=UTF-8',
        //                                  }
        //                         }
        //                     )
    }
}

export default new CastleDataService();