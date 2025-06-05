const Footer = () => {
  return (
    <footer className="section-footer">
      <div className="footer-container container">
        <div className="content_1">
          <p>
            Welcome to Movies Store, your ultimate destination for
            latest amazing movies!
          </p>
          <img src="https://i.postimg.cc/Nj9dgJ98/cards.png" alt="cards" />
        </div>
        <div className="content_2">
          <h4>SHOPPING</h4>
          <a href="#">Bollywood Store</a>
          <a href="#">Hollywood Store</a>
          <a href="#">Web Series</a>
          <a href="#">All languages</a>
        </div>
        <div className="content_3">
          <h4>Experience</h4>
          <a href="./contact.html">Contact Us</a>
          <a href="" target="_blank">
            Payment Method
          </a>
          <a href="" target="_blank">
            Delivery
          </a>
          <a href="" target="_blank">
            Return and Exchange
          </a>
        </div>
        <div className="content_4">
          <h4>NEWSLETTER</h4>
          <p>
            Be the first to know about new
            <br />
            arrivals, sales & promos!
          </p>
          <div className="f-mail">
            <input type="email" placeholder="Your Email" />
            <i className="bx bx-envelope"></i>
          </div>
          <hr />
        </div>
      </div>
      <div className="f-design">
        <div className="f-design-txt">
          <p>Design and Code by Ayush Mittal</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;