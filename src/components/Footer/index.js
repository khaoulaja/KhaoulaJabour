import React from "react";


const Footer = ()=>{
    return(
        <footer>
        <div className="row text-center foot-top">
          <div className="col-12">
            <h3>Get In Touch</h3>
            <a href="https://github.com/khaoulaja" target="_blank">
              <i className="fab fa-github"></i></a>
            <a href="https://www.linkedin.com/in/khaoula-jabour4/" target="_blank">
              <i className="fab fa-linkedin-in"></i></a>
            <a href="https://stackoverflow.com/users/16761006/khaoula-jabour" target="_blank">
              <i className="fab fa-stack-overflow"></i></a>
          </div>
          <div className="col-12 mt-2">
            <a className="mx-1" href="mailto:khaoulajabour4@gmail.com">khaoulajabour4@gmail.com</a>|
             <a className="mx-1" href="tel:9197179368">919-717-9368</a>
          </div>
        </div>
          <div className="row text-center foot-bottom ">
            <div className="col-12 m-auto">
            &copy; {new Date().getFullYear()} - Designed and Built by Khaoula Jabour
            </div>
        </div>          
      </footer>
    )
}

export default Footer;