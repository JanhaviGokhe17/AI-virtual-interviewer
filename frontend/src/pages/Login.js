import { useState } from "react";
import API from "../services/api";

function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/login", form);
      alert("Login successful!");
      console.log(res.data);
      // Token, user data yahan store kar sakte ho
    } catch (err) {
      alert("Login failed");
      console.error(err.response?.data || err.message);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit} style={{ maxWidth: "300px" }}>
        <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} required /><br /><br />
        <input type="password" name="password" placeholder="Password" value={form.password} onChange={handleChange} required /><br /><br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
