import { useNavigate } from "react-router-dom"


const Home = ()=>{
    const navigate = useNavigate();

    return(
        <div>
            <h1>Home</h1>
            <button type="button" class="btn btn-success my-3" onClick={()=>{navigate('/teachersignup')}} >Become An Instructor</button><br></br>
            <button type="button" class="btn btn-success" onClick={()=>{navigate('/studentsignup')}}>Become A Student</button>
        </div>
    )
}
export default Home