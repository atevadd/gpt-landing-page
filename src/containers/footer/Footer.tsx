import logo from "../../assets/logo.svg";
import "./footer.css";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="gpt3__footer ">
      <div className="gpt3__footer-top section__padding">
        <h2 className="gradient__text">
          Do you want to step in to the future before others
        </h2>
        <a href="#">Request Early Access</a>
      </div>
      <div className="gpt3__footer-container section__padding">
        <div className="gpt3__footer-logo">
          <img src={logo} alt="logo" />
          <p>Crechterwoord K12 182 DK </p>
          <p>Alknjkcb, All Rights Reserved</p>
        </div>
        <div className="gpt3__footer-column">
          <h4>Links</h4>
          <a href="#">Overons</a>
          <a href="#">Social Media</a>
          <a href="#">Counters</a>
          <a href="#">Contact</a>
        </div>
        <div className="gpt3__footer-column">
          <h4>Company</h4>
          <a href="#">Terms & conditions</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Contact</a>
        </div>
        <div className="gpt3__footer-column">
          <h4>Get in touch</h4>
          <a href="#">
            Crechterwoord K12 <br /> 182 DK Alknjkcb
          </a>
          <a href="#">085-132567</a>
          <a href="#">info@payme.net</a>
        </div>
      </div>
      <div className="gpt3__footer-bottom">
        <p>&copy;{year} GPT-3. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
