import * as React from "react";
import "../styles/header.scss";

class Header extends React.Component {
  componentDidMount() {
    window.addEventListener("scroll", this.toggleNav);
    this.toggleNav();
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.toggleNav);
  }

  toggleNav = () => {
    if (window.scrollY < 40) {
      document.querySelector("header").classList.remove("scrolled");
    } else {
      document.querySelector("header").classList.add("scrolled");
    }
  };

  render() {
    return (
      <header>
        <div class="header-content">
          <div class="logo">Game Academy of the Ozarks</div>
          <nav>
            <a href="#methods">Methods</a>
            <a href="#classes">Classes</a>
            <a href="#mission">Mission</a>
            <a href="#team">Team</a>
            <a href="#contact">Contact</a>
            {/* <a href="" class="button button-primary">Register now</a> */}
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
