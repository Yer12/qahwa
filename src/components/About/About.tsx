import "./About.scss";

const About = () => {
  return (
    <div className="about" id="about">
      <h1 className="title">✴️ О нас</h1>
      <p className="subtitle">
        Наша миссия - дать возможность насладиться вкусным кофе в любое время и в любом месте, даже если у вас нет времени на посещение кофейни. В нашем приложении вы найдете широкий выбор напитков, а также возможность настроить свой заказ по своим предпочтениям. Мы предлагаем не только классический эспрессо и латте, но и множество других напитков, которые удовлетворят любой вкус.
      </p>
      <div className="container">
        <div className="about-content">
          <div className="about-content_phone">
          </div>

          <div className="about-content_text">
            <div className="about-content_text-title">
              <h1 className="about-content_text-title_text">О приложении</h1>
            </div>
            <p className="about-content_text-subtitle">
              Мы гордимся тем, что предлагаем нашим клиентам самый быстрый и удобный способ заказа кофе. С Qahwa app вы можете наслаждаться вкусным кофе в любое время и в любом месте, без лишних усилий. Присоединяйтесь к нам и наслаждайтесь кофе в новом формате!

            </p>
            <div className="about-content_text-btn btn">
              Скачать приложение
            </div>
          </div>
        </div>


      </div>
    </div>
  )
}

export default About;
