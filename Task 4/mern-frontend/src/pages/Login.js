import {useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login(){
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const navigate = useNavigate();

  const loginUser = async()=>{
    try {
      const res = await axios.post("http://localhost:5000/api/login",{
        email,password
      });
      localStorage.setItem("token",res.data.token);
      navigate("/dashboard");
    } catch (err) {
      alert("Login failed");
    }
  };

  return(
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Login</h2>
      <div><input placeholder="Email" onChange={(e)=>setEmail(e.target.value)} style={{ margin: '10px', padding: '5px' }} /></div>
      <div><input placeholder="Password" type="password" onChange={(e)=>setPassword(e.target.value)} style={{ margin: '10px', padding: '5px' }} /></div>
      <button onClick={loginUser} style={{ padding: '5px 15px' }}>Login</button>
      <div style={{ marginTop: '10px' }}><button onClick={() => navigate("/register")}>Go to Register</button></div>
    </div>
  )
}

export default Login;
