import { useNavigate } from "react-router-dom"
import { useState } from "react"

const TeacherSignup = () => {
    const navigate = useNavigate();
    const [title, setTitle] = useState(null);
    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [fatherName, setFatherName] = useState(null);
    const [gender, setGender] = useState(null);
    const [experience, setExperience] = useState(null);
    const [aboutExperience, setAboutExperience] = useState(null);
    const [details, setDetails] = useState(null);
    const [password, setPassword] = useState(null);
    const [address, setAddress] = useState(null);
    const [additionalInformation, setAdditionalInformation] = useState(null);
    const [country, setCountry] = useState(null);
    const [city, setCity] = useState(null);
    const [skypeId, setSkypeId] = useState(null);
    const [dob, setDob] = useState(null);
    const [number, setNumber] = useState(null);
    // const [course, setCourse] = useState(null);
    const [email, setEmail] = useState(null);

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        if (id === "title") {
            setTitle(value);
          }
        if (id === "firstName") {
          setFirstName(value);
        }
        if (id === "lastName") {
            setLastName(value);
          }
        if (id === "fatherName") {
          setFatherName(value);
        }
        if(id === "experience"){
            setExperience(value);
        }
        if(id === "boutExperience"){
            setAboutExperience(value);
        }
        if(id === "details"){
            setDetails(value);
        }
        if(id === "password"){
            setPassword(value);
        }
        if(id === "address"){
            setAddress(value);
        }
        if(id === "additionalInformation"){
            setAdditionalInformation(value);
        }
        if(id === "country"){
            setCountry(value);
        }
        if(id === "city"){
            setCity(value);
        }
        if(id === "gender"){
            setGender(value);

        if(id === "skypeId"){
            setSkypeId(value);
        }        }
        if(id === "dob"){
            setDob(value);
        }
         if(id === "number"){
             setNumber(value);
         }
        if(id === "email"){
            setEmail(value);
        }    
    };


    const handleClick = () => {
        navigate('/teacherAccount')};
      const handleSubmit = () => {
        // console.log(name);
        if(!firstName ) { alert('Fill the empty input fields');  return false}; 
        const user = {
            title,
            firstName,
            lastName,
            fatherName,
            gender,
            experience,
            aboutExperience,
            details,
            password,
            additionalInformation,
            country,
            city,
            skypeId,
            dob,
            number,
            address,
            email,
        }
    localStorage.setItem('name', JSON.stringify(user.name));
        fetch('http://localhost:3010/teachers',{
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(user)
        }).then(resp => resp.json()).then(info => handleClick() );
      };
    return (
        <div>
            <h1>Teacher_Signup</h1>
            <section class="h-100 h-custom gradient-custom-2">
                <div class="container py-5 h-100">
                    <div class="row d-flex justify-content-center align-items-center h-100">
                        <div class="col-12">
                            <div class="card card-registration card-registration-2" style={{borderRadius: "15px"}}  >
                                <div class="card-body p-0">
                                    <div class="row g-0">
                                        <div class="col-lg-6">
                                            <div class="p-5">
                                                <h3 class="fw-normal mb-5" style={{color: "#4835d4"}}  >General Infomation</h3>

                                                <div class="mb-4 pb-2">
                                                    <select class="select">
                                                        <option value="1">Title</option>
                                                        <option value="2">Quran Teacher</option>
                                                        <option value="3">Islamic Teacher</option>
                                                        <option value="4">Molana sb</option>
                                                    </select>
                                                </div>

                                                <div class="row">
                                                    <div class="col-md-6 mb-4 pb-2">

                                                        <div class="form-outline">
                                                            <input onChange={(e) => handleInputChange(e)} type="text" id="firstName" class="form-control form-control-lg" />
                                                            <label class="form-label" for="firstName">First name</label>
                                                        </div>

                                                    </div>
                                                    <div class="col-md-6 mb-4 pb-2">

                                                        <div class="form-outline">
                                                            <input onChange={(e) => handleInputChange(e)} type="text" id="lastName" class="form-control form-control-lg" />
                                                            <label class="form-label" for="lastName">Last name</label>
                                                        </div>

                                                    </div>
                                                </div>
                                                <div class="mb-4 pb-2">
                                                    <div class="form-outline">
                                                        <input onChange={(e) => handleInputChange(e)} type="text" id="fatherName" class="form-control form-control-lg" />
                                                        <label class="form-label" for="fatherName">Father Name</label>
                                                    </div>
                                                </div>
                                                <div class="mb-4 pb-2">
                                                    <div class="form-outline">
                                                        <input onChange={(e) => handleInputChange(e)} type="text" id="gender" class="form-control form-control-lg" />
                                                        <label class="form-label" for="gender">Gender</label>
                                                    </div>
                                                </div>

                                                <div class="mb-4 pb-2">
                                                    <select class="select">
                                                        <option value="1">Experience</option>
                                                        <option value="2">Six months</option>
                                                        <option value="3">Six Months Plus</option>
                                                        <option value="4">One Year</option>
                                                        <option value="5">One Year Plus</option>
                                                        <option value="6">Two Year</option>
                                                        <option value="7">Two Year Plus</option>
                                                    </select>
                                                </div>

                                                <div class="mb-4 pb-2">
                                                    <div class="form-outline">
                                                        <input onChange={(e) => handleInputChange(e)} type="text" id="boutExperience" class="form-control form-control-lg" />
                                                        <label class="form-label" for="boutExperience">Details About Experience</label>
                                                    </div>
                                                </div>
                                                <div class="mb-4 pb-2">
                                                    <div class="form-outline">
                                                        <input onChange={(e) => handleInputChange(e)} type="text" id="details" class="form-control form-control-lg" />
                                                        <label class="form-label" for="details">Any Other Details</label>
                                                    </div>
                                                </div>
                                                <div class="mb-4 pb-2">
                                                    <div class="form-outline">
                                                        <input onChange={(e) => handleInputChange(e)} type="text" id="password" class="form-control form-control-lg" />
                                                        <label class="form-label" for="password">Password</label>
                                                    </div>
                                                </div>
                                                <button type="button" class="btn btn-outline-success btn-lg m-3"
                                                    data-mdb-ripple-color="dark" onClick={()=>{navigate('/teacherlogin')}} >Already has Account ? Click for Login</button>    
                                            </div>
                                        </div>
                                        <div class="col-lg-6 bg-indigo text-white">
                                            <div class="p-5">
                                                <h3 class="fw-normal mb-5">Contact Details</h3>

                                                <div class="mb-4 pb-2">
                                                    <div class="form-outline form-white">
                                                        <input onChange={(e) => handleInputChange(e)} type="text" id="address" class="form-control form-control-lg" />
                                                        <label class="form-label" for="address">Address</label>
                                                    </div>
                                                </div>

                                                <div class="mb-4 pb-2">
                                                    <div class="form-outline form-white">
                                                        <input onChange={(e) => handleInputChange(e)} type="text" id="additionalInformation" class="form-control form-control-lg" />
                                                        <label class="form-label" for="additionalInformation">Additional Information</label>
                                                    </div>
                                                </div>

                                                <div class="row">
                                                    <div class="col-md-5 mb-4 pb-2">

                                                        <div class="form-outline form-white">
                                                            <input onChange={(e) => handleInputChange(e)} type="text" id="country" class="form-control form-control-lg" />
                                                            <label class="form-label" for="country">State/Country</label>
                                                        </div>

                                                    </div>
                                                    <div class="col-md-7 mb-4 pb-2">

                                                        <div class="form-outline form-white">
                                                            <input onChange={(e) => handleInputChange(e)} type="text" id="city" class="form-control form-control-lg" />
                                                            <label class="form-label" for="city">City</label>
                                                        </div>

                                                    </div>
                                                </div>

                                                <div class="mb-4 pb-2">
                                                    <div class="form-outline form-white">
                                                        <input onChange={(e) => handleInputChange(e)} type="text" id="skypeId" class="form-control form-control-lg" />
                                                        <label class="form-label" for="skypeId">Skype ID</label>
                                                    </div>
                                                </div>

                                                <div class="row">
                                                    <div class="col-md-5 mb-4 pb-2">

                                                        <div class="form-outline form-white">
                                                            <input onChange={(e) => handleInputChange(e)} type="date" id="dob" class="form-control form-control-lg" />
                                                            <label class="form-label" for="dob">DOB</label>
                                                        </div>

                                                    </div>
                                                    <div class="col-md-7 mb-4 pb-2">

                                                        <div class="form-outline form-white">
                                                            <input onChange={(e) => handleInputChange(e)} type="text" id="number" class="form-control form-control-lg" />
                                                            <label class="form-label" for="number">Phone Number</label>
                                                        </div>

                                                    </div>
                                                </div>

                                                <div class="mb-4">
                                                    <div class="form-outline form-white">
                                                        <input onChange={(e) => handleInputChange(e)} type="text" id="email" class="form-control form-control-lg" />
                                                        <label class="form-label" for="email">Your Email</label>
                                                    </div>
                                                </div>

                                                <div class="form-check d-flex justify-content-start mb-4 pb-3">
                                                    <input onChange={(e) => handleInputChange(e)} class="form-check-input me-3" type="checkbox" value="" id="form2Example3c" />
                                                    <label class="form-check-label text-white" for="form2Example3">
                                                        I do accept the <a href="#!" class="text-white"><u>Terms and Conditions</u></a> of your
                                                        site.
                                                    </label>
                                                </div>

                                                <button type="button" class="btn btn-success btn-lg"
                                                    data-mdb-ripple-color="dark" onClick={() => handleSubmit()} >Register</button>

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
export default TeacherSignup