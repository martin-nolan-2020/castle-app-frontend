//connecting to backend Spring Boot API

import axios from "axios";

//want to access this REST endpoint which is in castlemanager/controllers/CastleController.java
//	@GetMapping("first-test")
	// public String getText() {
	// 	return "this is the first test. hello world";
	// }


class HelloWorldService{

    executeHelloWorldService(){
        // direct call to the CastleManager microservice on port 8100
        console.log("executeHelloWorldService");

        //returns a Promise
        return axios.get("http://localhost:8100/first-test")
        
    }

}


//any package that imports this class will get an instance due to "new" creating an object
export default new HelloWorldService();