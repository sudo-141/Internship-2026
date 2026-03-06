import {useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register(){
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const navigate = useNavigate();

  const registerUser = async()=>{
    try {
      await axios.post("http://localhost:5000/api/register",{
        name,email,password
      });
      alert("Registered Successfully");
      navigate("/login");
    } catch (err) {
      alert("Registration failed");
    }
  };

  return(
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Register</h2>
      <div><input placeholder="Name" onChange={(e)=>setName(e.target.value)} style={{ margin: '10px', padding: '5px' }} /></div>
      <div><input placeholder="Email" onChange={(e)=>setEmail(e.target.value)} style={{ margin: '10px', padding: '5px' }} /></div>
      <div><input placeholder="Password" type="password" onChange={(e)=>setPassword(e.target.value)} style={{ margin: '10px', padding: '5px' }} /></div>
      <button onClick={registerUser} style={{ padding: '5px 15px' }}>Register</button>
      <div style={{ marginTop: '10px' }}><button onClick={() => navigate("/login")}>Go to Login</button></div>
    </div>
  )
}

export default Register;
