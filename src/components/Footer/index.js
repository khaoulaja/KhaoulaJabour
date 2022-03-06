import React from "react";


const Footer = ()=>{
    return(
        <footer>
        <div className="row text-center foot-top">
          <div className="col-12">
            <h3 className="logo">Khaoula Jabour</h3>
            <a href="https://github.com/khaoulaja" target="_blank">
              <i className="fab fa-github"></i></a>
            <a href="https://www.linkedin.com/in/khaoula-jabour4/" target="_blank">
              <i className="fab fa-linkedin-in"></i></a>
            <a href="https://stackoverflow.com/users/16761006/khaoula-jabour" target="_blank">
              <i className="fab fa-stack-overflow"></i></a>
          </div>
          <div className="col-12 mt-2">
            <a href="mailto:khaoulajabour4@gmail.com">khaoulajabour4@gmail.com</a> | 
            <a href="tel:9197179368">919-717-9368</a>
          </div>          
        </div>
      </footer>
    )
}

export default Footer;