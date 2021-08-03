class AuthenticationService{

    registerSuccessfulLogin(username,password){
        console.log("Register a successful login")
        sessionStorage.setItem("authenticatedUser", username)
    }

    registerSuccessfulLogout(){
        console.log("Register a successful login")
        sessionStorage.removeItem("authenticatedUser")
    }

    isUserLoggedIn(){
        if(sessionStorage.getItem("authenticatedUser")===null){
            return false
        } else return true
        
    }
}

export default new AuthenticationService();