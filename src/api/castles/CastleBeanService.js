//connecting to backend Spring Boot API

import axios from "axios";

//want to access this REST endpoint which is in castlemanager/controllers/CastleController.java
// @GetMapping("second-test-castle-bean")
// 	public Castle getCastle() {
// 		return new Castle("BS-2", "Big slide", "Blue slide", null ,30.0, 25.0, 160.0);
// 	}


class HelloWorldService{

    executeCastleBeanService(){
        // direct call to the CastleManager microservice on port 8100
        console.log("executeCastleBeanService");

        //returns a Promise
        return axios.get("http://localhost:8100/second-test-castle-bean")
        
    }

}


//any package that imports this class will get an instance due to "new" creating an object
export default new HelloWorldService();