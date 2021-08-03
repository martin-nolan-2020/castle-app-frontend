class AuthenticationService{

    registerSuccessfulLogin(username,password){
        console.log("Register a successful login")
        sessionStorage.setItem("authenticatedUser", username)
    }

}

export default new AuthenticationService();