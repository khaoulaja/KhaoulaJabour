import React from "react";
import Navigation from "../Navigation";
import logo from "../../assets/icons/logo.png"
const Header = ({currentPage, handlePageChange}) =>{

    return (
        <header className="w-content">
        <nav className="navbar navbar-expand-lg navbar-light w-100 pt-0 nav-anim">
            <div className="container-fluid side-nav nav-row"> {/*flex-column*/}
              <a className="navbar-brand nav-margin" href="/KhaoulaJabour">
                  {/* <h1 className="logo">Khaoula Jabour</h1> */}
                  <img className="logo" src={logo}/>
              </a>
             <Navigation 
             currentPage={currentPage}
             handlePageChange={handlePageChange}
             />
            </div>
          </nav>
    </header>
    )
}
export default Header;