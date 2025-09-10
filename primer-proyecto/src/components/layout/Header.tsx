import { Link } from "react-router-dom";

const Header = () => {
  return (
  <header className="header">
    <a href="#home" className="logo">My Portfolio</a>
    
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/skills">Skills</Link>
      <Link to="/contact">Contact Me</Link>
    </nav>
  </header>
  );
};
export default Header;
