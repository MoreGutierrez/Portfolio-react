import './Home.css';
import { Linkedin, Github } from 'react-bootstrap-icons';
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main>
      <section id="home" className="home">
        <div className="home-img">
          <img src="/img/icono_portfolio.jpg" className="profile-image" alt="Profile" />
        </div>

        <div className="home-content">
          <h3>Hello!</h3>
          <h1>Welcome to my Portfolio</h1>
          <h3>I'm a <span className="multiple-text">Full Stack Web Developer</span></h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo excepturi maiores delectus tempora molestias nihil aperiam, similique, consequuntur deserunt error facilis aut blanditiis ducimus, sit iure sed quos libero doloribus.</p>

          <div className="social-media">
            <a href="#"><Linkedin /></a>
            <a href="#"><Github /></a>
          </div>

          <Link to="/contact" className="btn">Contact Me</Link>
        </div>
      </section>
    </main>
  );
};

export default Home;
