function validation(values){ //values=useState fomvalue
    const errors = {}; //storing errors
    const regex = /^[^\s@]+@[^s@]+\.[^\s@]{2,}$/i;

    if(!values.username){
        errors.username = "username is required";
    }
    if(!values.email){
        errors.email = "email is required";
    }
    else if(!regex.test(values.email)){
        errors.email = "email is invalid";
    }
    if(!values.password){
        errors.password = "Password is required";
    }
    else if(values.password.length<5){
        errors.password = "password is too short";
    }
    return errors;

}
export default validation;