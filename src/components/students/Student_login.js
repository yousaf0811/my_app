import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom"
import { useState } from "react";

const StudentLogin = () => {

    const [database, setDatabase] = useState([]);
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/studentaccount");
      };

    const handleSubmit = (event) => {
        event.preventDefault();
        const { email, password } = document.forms[0];
        const userData = database.find((user) => user.email === email.value);
        // console.log("1223", userData )
        if (userData) {
          if (userData.password !== password.value) {
            alert("Invalid password");
          } else {
            localStorage.setItem("name", JSON.stringify(userData.firstName));
            localStorage.setItem("id", JSON.stringify(userData.id));
            handleClick();
          }
        } else {
          alert("email not found");
        }
        console.log(password, email);
        if (!email.value || !password.value) {
          alert("Fill the empty input fields");
          return false;
        }
      };
    useEffect(() => {
        let localData = localStorage.getItem("name");
        // console.log("Data :: ", localData);
        fetch("http://localhost:3010/student")
          .then((resp) => resp.json())
          .then((info) => setDatabase(info));
      }, []);
    return (
        <div>
            <h1>Student_login</h1>
            <section class="vh-100" style={{ backgroundColor: "#9A616D" }}>
                <div class="container py-5 h-100">
                    <div class="row d-flex justify-content-center align-items-center h-100">
                        <div class="col col-xl-10">
                            <div class="card" style={{ borderRadius: "1rem" }}>
                                <div class="row g-0">
                                    <div class="col-md-6 col-lg-5 d-none d-md-block">
                                        <img src="https://images.unsplash.com/photo-1519818187420-8e49de7adeef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80"
                                            alt="login form" class="img-fluid" style={{ borderRadius: "1rem 0 0 1rem" }} />
                                    </div>
                                    <div class="col-md-6 col-lg-7 d-flex align-items-center">
                                        <div class="card-body p-4 p-lg-5 text-black">

                                            <form onSubmit={handleSubmit} >

                                                <div class="d-flex align-items-center mb-3 pb-1">
                                                    <i class="fas fa-cubes fa-2x me-3" style={{ color: "#ff6219" }}></i>
                                                    <span class="h1 fw-bold mb-0">Logo</span>
                                                </div>

                                                <h5 class="fw-normal mb-3 pb-3" style={{ letterSpacing: "1px" }}>Sign into your account</h5>

                                                <div class="form-outline mb-4">
                                                    <input type="email" id="email" class="form-control form-control-lg" />
                                                    <label class="form-label" for="email">Email address</label>
                                                </div>

                                                <div class="form-outline mb-4">
                                                    <input type="password" id="password" class="form-control form-control-lg" />
                                                    <label class="form-label" for="form2Example27">Password</label>
                                                </div>

                                                <div class="pt-1 mb-4">
                                                    <button class="btn btn-success btn-lg btn-block" type="submit">Login</button>
                                                </div>

                                                <a class="small text-muted" href="#!">Forgot password?</a>
                                                <p class="mb-5 pb-lg-2" style={{ color: "#393f81" }}>Don't have an account? <a href="/studentsignup"
                                                    style={{ color: "#393f81" }}>Register here</a></p>
                                                <a href="#!" class="small text-muted">Terms of use.</a>
                                                <a href="#!" class="small text-muted">Privacy policy</a>
                                            </form>

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
export default StudentLogin