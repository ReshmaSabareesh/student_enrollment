function validation(values){ //values=useState fomvalue
    const errors = {}; //storing errors
    const regex = /^[^\s@]+@[^s@]+\.[^\s@]{2,}$/i;

    if(!values.username){
        errors.name = "username is required";
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
    if(!values.place){
        errors.place = "Field is empty";
    }
     if(!values.address){
        errors.address = "Field is empty";
    } 
    if(!values.passOutYear){
        errors.passOutYear = "Field is empty";
    } 
    if(!values.skillSet){
        errors.skillSet = "Field is empty";
    }   
    if(!values.technologyTraining){
        errors.technologyTraining = "Field is empty";
    }   
    if(!values.year){
        errors.year = "Field is empty";
    }   
    if(!values.photo){
        errors.photo = "upload photo";
    }
    return errors;

}
export default validation;