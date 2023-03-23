import "./About.scss";
import Logo from "../../assets/Logo";

const About = () => {
  return (
    <div className="about">
      <h1 className="title">✴️ About</h1>
      <p className="subtitle">
        Whatever it is you want to accomplish in life,
        Things can help you get there. Install the app
        today and see what you can do!
      </p>
      <div className="container">
        <div className="about-content">
          <div className="about-content_phone">
          </div>

          <div className="about-content_text">
            <div className="about-content_text-title">
              <h1 className="about-content_text-title_text">About App</h1>
            </div>
            <p className="about-content_text-subtitle">
              Things makes it easy. Within the hour, you’ll have everything off your mind and neatly organized – from routine tasks to your biggest life goals – and you can start focusing on what matters today.
            </p>
            <div className="about-content_text-btn">
              Download App
            </div>
          </div>
        </div>


      </div>
    </div>
  )
}

export default About;
