import { useNavigate } from "react-router-dom"
import { useState } from "react"

const StudentSignUp = () => {
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [fatherName, setFatherName] = useState(null);
    const [address, setAddress] = useState(null);
    const [gender, setGender] = useState(null);
    const [dob, setDob] = useState(null);
    const [state, setState] = useState(null);
    const [city, setCity] = useState(null);
    const [course, setCourse] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const handleInputChange = (e) => {
        const { id, value } = e.target;
        if (id === "firstName") {
          setFirstName(value);
        }
        if (id === "lastName") {
            setLastName(value);
          }
        if (id === "fatherName") {
          setFatherName(value);
        }
        if(id === "address"){
            setAddress(value);
        }
        if(id === "gender"){
            setGender(value);
        }
        if(id === "dob"){
            setDob(value);
        }
        if(id === "state"){
            setState(value);
        }
        if(id === "city"){
            setCity(value);
        }
        if(id === "course"){
            setCourse(value);
        }
        if(id === "email"){
            setEmail(value);
        }
        if(id === "password"){
            setPassword(value);
        }
      };

    const handleClick = () => {
        navigate('/studentaccount')};
      const handleSubmit = () => {
        // console.log(name);
        if(!firstName ) { alert('Fill the empty input fields');  return false}; 
        const user = {
            firstName,
            lastName,
            fatherName,
            address,
            gender,
            dob,
            state,
            city,
            course,
            email,
            password
        }
    localStorage.setItem('name', JSON.stringify(user.firstName));
        fetch('http://localhost:3010/student',{
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(user)
        }).then(resp => resp.json()).then(info => handleClick() );
      };
    return (
        <div>
        <section class="h-100 bg-dark">
            <div class="container py-5 h-100">
                <div class="row d-flex justify-content-center align-items-center h-100">
                    <div class="col">
                        <div class="card card-registration my-4">
                            <div class="row g-0">
                                <div class="col-xl-6 d-none d-xl-block">
                                     <img src="https://images.unsplash.com/photo-1537181534458-45dcee76ae90?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80"
                                         alt="Sample" class="img-fluid" height="800px" 
                                         style={{borderTopLeftRadius: ".25rem"}}/>
                                         {/* style={{borderBottomLeftRadius: ".25rem"}}  */}
                                </div>
                                <div class="col-xl-6">
                                    <div class="card-body p-md-5 text-black">
                                        <h3 class="mb-5 text-uppercase">Student registration form</h3>

                                        <div class="row">
                                            <div class="col-md-6 mb-4">
                                                <div class="form-outline">
                                                    <input onChange={(e) => handleInputChange(e)} type="text" id="firstName" class="form-control form-control-lg" />
                                                    <label class="form-label" for="form3Example1m">First name</label>
                                                </div>
                                            </div>
                                            <div class="col-md-6 mb-4">
                                                <div class="form-outline">
                                                    <input onChange={(e) => handleInputChange(e)} type="text" id="lastName" class="form-control form-control-lg" />
                                                    <label class="form-label" for="form3Example1n">Last name</label>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="row">
                                            <div class="form-outline mb-4">
                                                <div class="form-outline">
                                                    <input onChange={(e) => handleInputChange(e)} type="text" id="fatherName" class="form-control form-control-lg" />
                                                    <label class="form-label" for="form3Example1n1">Father's name</label>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="form-outline mb-4">
                                            <input onChange={(e) => handleInputChange(e)} type="text" id="address" class="form-control form-control-lg" />
                                            <label class="form-label" for="form3Example8">Address</label>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6 mb-4">
                                                <div class="form-outline">
                                                    <input onChange={(e) => handleInputChange(e)} type="text" id="gender" class="form-control form-control-lg" />
                                                    <label class="form-label" for="form3Example1m">Gender</label>
                                                </div>
                                            </div>
                                            <div class="col-md-6 mb-4">
                                                <div class="form-outline">
                                                    <input onChange={(e) => handleInputChange(e)} type="date" id="dob" class="form-control form-control-lg" />
                                                    <label class="form-label" for="form3Example1n">DOB</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6 mb-4">
                                                <div class="form-outline">
                                                    <input onChange={(e) => handleInputChange(e)} type="text" id="state" class="form-control form-control-lg" />
                                                    <label class="form-label" for="form3Example1m">State</label>
                                                </div>
                                            </div>
                                            <div class="col-md-6 mb-4">
                                                <div class="form-outline">
                                                    <input onChange={(e) => handleInputChange(e)} type="text" id="city" class="form-control form-control-lg" />
                                                    <label class="form-label" for="form3Example1n">City</label>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="form-outline mb-4">
                                            <input onChange={(e) => handleInputChange(e)} type="text" id="course" class="form-control form-control-lg" />
                                            <label class="form-label" for="form3Example99">Course</label>
                                        </div>

                                        <div class="form-outline mb-4">
                                            <input onChange={(e) => handleInputChange(e)} type="email" id="email" class="form-control form-control-lg" />
                                            <label class="form-label" for="form3Example97">Email ID</label>
                                        </div>
                                        <div class="form-outline mb-4">
                                            <input onChange={(e) => handleInputChange(e)} type="password" id="password" class="form-control form-control-lg" />
                                            <label class="form-label" for="form3Example97">Password</label>
                                        </div>

                                        <div class="d-flex justify-content-end pt-3">
                                            <button type="button" class="btn btn-outline-success btn-lg">Reset all</button>
                                            <button type="button" class="btn btn-success btn-lg ms-2" onClick={() => handleSubmit()} >Submit form</button>
                                        </div>
                                        <div class="d-flex justify-content-end pt-3">
                                            <button type="button" class="btn btn-success btn-lg ms-4" onClick={()=>{navigate('/studentlogin')}} >Already has Account ? Click for Log in</button>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </div>
    )
}
export default StudentSignUp