import "./Hero.scss";
import Header from "../Header/Header";
import Logo from "../../assets/Logo";

const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        <Header />

        <div className="content">
          <Logo />
          <h1 className="hero-title">
            Qahwa App
          </h1>
          <p className="hero-subtitle">
            Things is the award-winning personal task manager that helps you plan your day, manage your projects, and make real progress toward your goals.
          </p>
          <div className="hero-btn">
            Download App
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero;
