import { useEffect, useState } from "react";
import axios from "axios";

function Dashboard(){
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) return;
        
        const res = await axios.get("http://localhost:5000/api/profile", {
          headers: { Authorization: token }
        });
        setUser(res.data.user);
      } catch (err) {
        console.error("Failed to fetch profile", err);
      }
    };
    fetchProfile();
  }, []);

  const logout = ()=>{
    localStorage.removeItem("token");
    window.location.href="/login";
  };

  return(
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>Welcome {user ? user.name : "User"} 🎉</h2>
      {user && <p>Email: {user.email || "Not provided"}</p>}
      <button 
        onClick={logout} 
        style={{ padding: "8px 16px", backgroundColor: "#ff4d4f", color: "white", border: "none", borderRadius: "5px", cursor: "pointer", marginBottom: "20px" }}
      >
        Logout
      </button>
    </div>
  )
}

export default Dashboard;