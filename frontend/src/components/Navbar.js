import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ padding: "10px", backgroundColor: "#282c34" }}>
      <Link to="/" style={{ margin: "10px", color: "white" }}>Home</Link>
      <Link to="/upload" style={{ margin: "10px", color: "white" }}>Upload Resume</Link>
      <Link to="/interview" style={{ margin: "10px", color: "white" }}>Interview</Link>
      <Link to="/feedback" style={{ margin: "10px", color: "white" }}>Feedback</Link>
      <Link to="/login" style={{ margin: "10px", color: "white" }}>Login</Link>
      <Link to="/register" style={{ margin: "10px", color: "white" }}>Register</Link>
    </nav>
  );
}

export default Navbar;
