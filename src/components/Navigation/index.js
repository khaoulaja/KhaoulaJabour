import React from "react";


const Navigation =({ currentPage, handlePageChange})=>{

    return (
        <div className="navigation">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-list text-light" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
</svg></span>
            </button>
            <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                <ul className="navbar-nav side-nav-links nav-flex text-left">
                <li className="nav-item">
                    <a 
                    href="#about" 
                    onClick={()=> handlePageChange('About')}
                    className={currentPage === 'About' ? 'nav-link current' : 'nav-link'} 
                    >About me</a>
                </li>
                <li className="nav-item">
                    <a 
                    onClick={()=>handlePageChange('Portfolio')}
                    className={currentPage === 'Portfolio' ? 'nav-link current' : 'nav-link'} 
                    >Portfolio</a>
                </li>
                <li className="nav-item">
                    <a 
                    onClick={()=>handlePageChange('Contact')}
                    className={currentPage === 'Contact' ? 'nav-link current' : 'nav-link'} 
                    >Contact</a>
                </li>
                <li className="nav-item">
                    <a 
                    onClick={()=>handlePageChange('Resume')}
                    className={currentPage === 'Resume' ? 'nav-link current' : 'nav-link'} 
                    >Resume</a>
                </li>
                </ul>
            </div>
        </div>
    )
}

export default Navigation;