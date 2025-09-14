import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">MyBlog</h2>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/create">Write</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
      </div>
    </nav>
  );
}
