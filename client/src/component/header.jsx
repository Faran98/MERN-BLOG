import React, { Component } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

class Header extends Component {

    state = {
      navlink: [
        { name: "Home", link: "/" },
        { name: "About", link: "/about" },
        { name: "Article List", link: "/articlelist" },
      ],
      open: false,
    };
   
  toggleMenu = () => {
    this.setState((prevState) => ({ open: !prevState.open }));
  };

  render() {
    return (
      <header className="sticky top-0 z-50 w-full bg-white  ">
        <div className="dark:bg-transparent md:py-4 pt-4">
          <nav className="flex flex-col md:flex-row items-center justify-between w-full px-4 md:px-32 custom:text-xl">
            <a
              href="/"
              className="flex text-black text-2xl font-bold transition ease-in-out delay-150 duration-300 hover:text-nav-black"
            >
              DailyBlog<span className="text-custom-green">.</span>
            </a>
            <div
              onClick={this.toggleMenu}
              className=" text-black absolute right-8 top-5 md:hidden cursor-pointer"
            >
              {this.state.open ? (
                <FaTimes className="text-2xl" />
              ) : (
                <FaBars className="text-2xl" />
              )}
            </div>
            <ul
              className={`text-black flex flex-col md:flex-row md:items-center md:space-x-8 mt-4 md:mt-0 transition-all duration-500 ease-in-out ${
                this.state.open ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
              } md:max-h-full md:opacity-100`}
            >
              {this.state.navlink.map((nav) => (
      <li key={nav.name} className="mb-4 md:mb-0">
        <Link to={nav.link}>{nav.name}</Link>
      </li>
    ))}

            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
