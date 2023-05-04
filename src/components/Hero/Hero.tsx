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
            Qahwa app - это мобильное приложение, которое позволяет заказывать кофе в любое время и из любого места, где бы вы ни находились. Мы стремимся сделать процесс заказа кофе максимально удобным, быстрым и простым для всех наших пользователей.
          </p>
          <div className="hero-btn btn">
            Скачать приложение
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero;
