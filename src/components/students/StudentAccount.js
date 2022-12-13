import { useNavigate } from "react-router-dom"


const StudentAccount = ()=>{

    const navigate = useNavigate();
    return(
        <div>
            <h1>Student_Account</h1>
            <button type="button" class="btn btn-success" onClick={()=>{navigate('/')}}>Log Out</button>
        </div>
    )
}
export default StudentAccount