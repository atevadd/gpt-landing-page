import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/logo.svg";
import "./navbar.css";
import { useState } from "react";

const Menu = () => (
  <>
    <a href="#home">Home</a>
    <a href="#wgpt3">What is GPT3</a>
    <a href="#possibility">OpenAI</a>
    <a href="#features">Case Studies</a>
    <a href="#blog">Library</a>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} alt="logo" loading="lazy" />
        </div>
        <div className="gpt3__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <a href="#">Sign in</a>
        <a href="#" className="sign-up">
          Sign up
        </a>
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="gpt3__navbar-menu_container scale-up-center">
            <div className="gpt3__navbar-menu_container-links">
              <Menu />

              <div className="gpt3__navbar-menu_container-links-sign">
                <a href="#">Sign in</a>
                <a href="#" className="sign-up">
                  Sign up
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
