import { LoginForm } from "../components/login/LoginForm"
import login from "../assets/login.png"
export const Login = ()=>{
    return (
        <div style={{display:"flex"}}>
            <LoginForm/>
            <img style={{maxHeight:"100vh", width:"50vw"}}  src={login}/>
        </div>
    )
 }