import React, { useEffect, useState } from 'react';
import './Studentregistration.css';
import validation from './Validation';
import { useNavigate } from "react-router-dom";


function Studentregistration(props) {
    const navigate = useNavigate();
    
 //Manage form values
    const [formValues,setFormValues] =useState({name:"",email:"",password:"",phone:"",place:"",address:"",qualification:"",passOutYear:"",skillSet:"",employmentStatus:"",year:"",course:"",fee:"",photo:""});
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
    alert("Signup Successfull");
    navigate("/student-register") ;     
    }
    },[formErrors]);
    
    async function fetchForm() {
        const name = formValues.name;
        const email = formValues.email;
        const password = formValues.password;
        const phone = formValues.phone;
        const place = formValues.place;
        const address = formValues.address;
        const qualification = formValues.qualification;
        const passOutYear= formValues.passOutYear;
        const skillSet= formValues.skillSet;
        const employmentStatus= formValues.employmentStatus;
        const technologyTraining= formValues.technologyTraining;
        const year= formValues.year;
        const course= formValues.course;
        const fee= formValues.fee; 
        const photo= formValues.photo;

        const response = await fetch(`https://ictak-project.herokuapp.com/api/auth/student-register`,  {
            method: 'post',
            body: JSON.stringify({ name, email,password,phone,place,address,qualification,passOutYear,skillSet,employmentStatus,technologyTraining,year,course,fee }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await response.json();
        if (data.status === 500||!data){
            window.alert("Invalid Registration");
        }else 
        {
            window.alert("  Successfull") ;
            navigate("/login");
        }
        console.log(data);
        // const photo_response = await fetch(`https://localhost:5000/api/upload`,  {
        //     method: 'post',
        //     body: JSON.stringify({ photo }),
        //     headers: {
        //         'Content-Type': 'application/json'
        //     }
        // })
        // const body2 = await photo_response.json();
        // console.log(body2);
    }
    return (
        <div className='body'>
             {/* Object.keys(formErrors).length === 0 && isSubmit ? (<div className='signupchk'> Signup Successful </div>){navigate ("/")}:(<div className='signupchk'> Signup failed </div>); */}
                <div className="main">
                    {/* <pre className='pretext'>{JSON.stringify(formValues,undefined,2)}</pre>  	 */}
                    {/* <input type="checkbox" className="chk" aria-hidden="true"/> */}
    
                    <div className="signup">
                        <form onSubmit={handleSubmit}>
                            <label for="chk" aria-hidden="true">REGISTRATION</label>
                            <input type="text" name="name" placeholder="Username" required="" value={formValues.username} onChange={handleChange}/>
                            <p className='error' >{formErrors.username}</p>
                            <input type="email" name="email" placeholder="Email" required="" value={formValues.email} onChange={handleChange} />
                            <p className='error'>{formErrors.email}</p>
                            <input type="password" name="password" placeholder="Password" required="" value={formValues.password} onChange={handleChange} />
                            <p className='error'>{formErrors.password}</p>  
                            <input type="tel" name="phone" placeholder="Mobile NO" required="" value={formValues.phone} onChange={handleChange} />
                            <p className='error'>{formErrors.phone}</p> 
                            <input type="text" name="place" placeholder="Place" required="" value={formValues.place} onChange={handleChange} />
                            <p className='error'>{formErrors.place}</p>
                             <input type="text" name="address" placeholder="address" required="" value={formValues.address} onChange={handleChange} />
                            <p className='error'>{formErrors.address}</p> 
                             
                            <label>Qualification
                                <select name='qualification' value={formValues.qualification} onChange={handleChange}>
                                    <option value="BSC">BSC</option>
                                    <option value="MSC">MSC</option>
                                    <option value="BCA">MCA</option>
                                    <option value="MCA">MCA</option>
                                    <option value="B.Tech">B.Tech</option>
                                    <option value="M.Tech">M.Tech</option>
                                </select></label>
                             <input type="text" name="passOutYear" placeholder="passout year" required="" value={formValues.passOutYear} onChange={handleChange} />
                            <p className='error'>{formErrors.passOutYear}</p> 
                             <input type="text" name="skillSet" placeholder="skills" required="" value={formValues.skillSet} onChange={handleChange} />
                            <p className='error'>{formErrors.skillSet}</p>
                            <label>Employment status
                                <select name='employmentStatus' value={formValues.employmentStatus} onChange={handleChange}>
                                    <option value="student">Student</option>
                                    <option value="Employee">Employee</option>
                                    <option value="Self employed">Self employed</option>
                                </select></label>
                                <input type="text" name="technologyTraining" placeholder="technology training" required="" value={formValues.technologyTraining} onChange={handleChange} />
                                <p className='error'>{formErrors.technologyTraining}</p>
                                <input type="text" name="year" placeholder="year" required="" value={formValues.year} onChange={handleChange} />
                                 <p className='error'>{formErrors.year}</p>
                                <label>Course
                                <select  name='course' value={formValues.course} onChange={handleChange}>
                                    <option value="BSC">ASP.net</option>
                                    <option value="MSC">MERN</option>
                                    <option value="BCA">MEAN</option>
                                    <option value="MCA">SOFTWARE TESTING</option>
                                    <option value="B.Tech">B.Tech</option>
                                    <option value="M.Tech">M.Tech</option>
                                </select></label>
                                <input type="text" name="fee" placeholder="Course FEE" required="" value={formValues.fee} onChange={handleChange} />
                            <p className='error'>{formErrors.password}</p>
                            <input type="file" name='photo' value={formValues.file} onChange={handleChange} />
                            <button onClick={fetchForm} >Sign up</button>
                        </form>
                    </div>

                  
                </div>
            </div>
        );
   
}

export default Studentregistration;