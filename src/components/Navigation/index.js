import React from "react";


const Navigation =({ currentPage, handlePageChange})=>{

    return (
        <div className="navigation">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul className="navbar-nav float-end">
                <li className="nav-item">
                    <a 
                    href="#about" 
                    onClick={()=> handlePageChange('About')}
                    className={currentPage === 'About' ? 'nav-link active' : 'nav-link'} 
                    >About me</a>
                </li>
                <li className="nav-item">
                    <a 
                    onClick={()=>handlePageChange('Portfolio')}
                    className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'} 
                    >Portfolio</a>
                </li>
                <li className="nav-item">
                    <a 
                    onClick={()=>handlePageChange('Contact')}
                    className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'} 
                    >Contact</a>
                </li>
                <li className="nav-item">
                    <a 
                    onClick={()=>handlePageChange('Resume')}
                    className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'} 
                    >Resume</a>
                </li>
                </ul>
            </div>
        </div>
    )
}

export default Navigation;