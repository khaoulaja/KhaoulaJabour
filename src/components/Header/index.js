import React from "react";
import Navigation from "../Navigation";

const Header = () =>{

    return (
        <header>
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid align-items-baseline">
              <a className="navbar-brand" href="/">
                  <h1 className="logo">Khaoula Jabour</h1>
              </a>
             <Navigation/>
            </div>
          </nav>
    </header>
    )
}
export default Header;