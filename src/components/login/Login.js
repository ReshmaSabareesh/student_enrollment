import React, { useEffect, useState } from 'react';
import { FaFacebookSquare,FaLinkedin,FaGoogle,FaLock,FaUserCircle,FaUser} from "react-icons/fa";
import './Login.css';
import validation from './Validation';
import { useNavigate } from "react-router-dom";
function Login() {
    const navigate = useNavigate();
    //Manage form values
    const [formValues,setFormValues] =useState({username:"",password:""});
   // flage gor succesfull submit
    const [isSubmit,setIsSubmit] = useState(false);


    //Manage Field change
    const handleChange =(event) => {
        console.log(event.target)
        const{name,value} = event.target;//destructuring
        setFormValues({...formValues, [name]:value})
        console.log(formValues);
    }
        //Manage form errors
        const [formErrors,setFormErrors] =useState({});

    //manage form submit
    const handleSubmit = (event) =>{
        event.preventDefault();
       setFormErrors(validation(formValues));
        setIsSubmit(true);
    }
    //successfull signup validation
    useEffect(() => {
        if(Object.keys(formErrors).length === 0 && isSubmit){
        alert("Login Successfull");
        }
    },[formErrors]);
    // async function fetchForm() {
    //     const name = formValues.name;
    //     const password = formValues.password;
        

    //     const response = await fetch(`https://ictak-project.herokuapp.com/api/auth/login/student`,  {
    //         method: 'post',
    //         body: JSON.stringify({ name,password}),
    //         headers: {
    //             'Content-Type': 'application/json'
    //         }
    //     })
    //     const data = await response.json();
    //     if (data.status === 401||!data){
    //         window.alert("Invalid username or password");
    //     }else{
    //         window.alert("Registration Successfull")
    //         navigate("/student/login");
    //     }
    //     console.log(data);

    // }

    return (
        <div className='registerTab'>
            <button className='navigate' onClick={() => navigate("/student-register")}>Sign up as student</button>
         <div className='body'>  
         {Object.keys(formErrors).length === 0 && isSubmit ? (<div className='signupchk'> Signup Successful</div>):(<pre className='pretext'>{JSON.stringify(formValues,undefined,2)}</pre>)}
             <div className="main">
    {/* <pre className='pretext'>{JSON.stringify(formValues,undefined,2)}</pre>  	 */}
		    <input type="checkbox" className="chk" aria-hidden="true"/>

			    <div className="signup">
                  <form onSubmit={handleSubmit}>
                       <label for="chk" aria-hidden="true">Login</label>
                      <input type="text" name="username" placeholder="User name" required="" value={formValues.username} onChange={handleChange}/>
                       <p className='error' >{formErrors.username}</p>
                       
                        <input type="password" name="password" placeholder="Password" required="" value={formValues.password} onChange={handleChange} />
                   <p className='error'>{formErrors.password}</p>
                     <button>Login</button>
                   </form>
			    </div>

			  
	        </div>
         </div>
         </div>
/* <div className="container">
    <div className="form-box">
        <div className="header-form">
            <h4 className="text-primary text-center">< FaUserCircle style={{fontSize:"110px"}}/></h4>
            <div className="image">
            </div>
        </div>
        <div className="body-form">
            <form  onSubmit={handleSubmit}>
                <div className="input-group mb-3"> 
                    <div className="input-group-prepend"> 
                        <span className="input-group-text"> <FaUser/> </span> 
                    </div> 
                    <input type="text" name="username"  className="form-control" placeholder="Username" required="" value={formValues.username} onChange={handleChange}/>
                    <p className='error' >{formErrors.username}</p>
                </div> 

            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" > <FaLock/> </span>
                </div>
                    <input type="text" name="password"  className="form-control" placeholder="Password" required="" value={formValues.password} onChange={handleChange} />
                    <p className='error'>{formErrors.password}</p>
                </div>

                <button type="button"  className="btn btn-secondary btn-block">LOGIN</button>
                <div className="message">
                <div><input type="checkbox" /> Remember ME</div>
                <div><button className='navigate' onClick={() => navigate("/student-register")}> Sign UP</button></div>
                </div>
            </form>
        <div className="social">
         <a href="#"><FaLinkedin/> </a>
         <a href="#"><FaGoogle/></a>
         <a href="#"><FaFacebookSquare/></a>
        </div>
    </div>
    </div>
</div> */
    );
}

export default Login;