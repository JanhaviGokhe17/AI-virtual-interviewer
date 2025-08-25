import { useState } from "react";
import API from "../services/api";

function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/register", form);
      alert("Registered successfully!");
      console.log(res.data);
    } catch (err) {
      alert("Error during registration");
      console.error(err.response?.data || err.message);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Register</h2>
      <form onSubmit={handleSubmit} style={{ maxWidth: "300px" }}>
        <input type="text" name="name" placeholder="Name" value={form.name} onChange={handleChange} required /><br /><br />
        <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} required /><br /><br />
        <input type="password" name="password" placeholder="Password" value={form.password} onChange={handleChange} required /><br /><br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
