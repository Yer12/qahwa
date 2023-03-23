import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer-content">
          <h1 className="title">📩 Things Newsletter</h1>
          <p className="subtitle">
            Whatever it is you want to accomplish in life,
            Things can help you get there. Install the app
            today and see what you can do!
          </p>
          <div className="footer-content_form">
            <input type="text" placeholder="me@examle.com" className="footer-content_form-input"/>
            <p className="footer-content_form-subtitle">
              Your privacy is very important to us. We’ll only ever use your
              address to send you this newsletter,
              and you can unsubscribe at any time. See our Privacy Policy.
            </p>

            <div className="footer-content_form-btn">
              Subscribe
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-list">
            <div className="footer-bottom_row">
              <p className="footer-bottom_row-title">
                Products
              </p>
              <p className="footer-bottom_row-item">Things for Mac</p>
              <p className="footer-bottom_row-item">Things for iPhone</p>
              <p className="footer-bottom_row-item">Things for Watch</p>
              <p className="footer-bottom_row-item">Things for iPad</p>
            </div>
            <div className="footer-bottom_row">
              <p className="footer-bottom_row-title">
                Products
              </p>
              <p className="footer-bottom_row-item">Things for Mac</p>
              <p className="footer-bottom_row-item">Things for iPhone</p>
              <p className="footer-bottom_row-item">Things for Watch</p>
              <p className="footer-bottom_row-item">Things for iPad</p>
            </div>
            <div className="footer-bottom_row">
              <p className="footer-bottom_row-title">
                Products
              </p>
              <p className="footer-bottom_row-item">Things for Mac</p>
              <p className="footer-bottom_row-item">Things for iPhone</p>
              <p className="footer-bottom_row-item">Things for Watch</p>
              <p className="footer-bottom_row-item">Things for iPad</p>
            </div>
            <div className="footer-bottom_row">
              <p className="footer-bottom_row-title">
                Products
              </p>
              <p className="footer-bottom_row-item">Things for Mac</p>
              <p className="footer-bottom_row-item">Things for iPhone</p>
              <p className="footer-bottom_row-item">Things for Watch</p>
              <p className="footer-bottom_row-item">Things for iPad</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;
