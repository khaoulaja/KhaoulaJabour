import React from "react";


const Navigation =(props)=>{
    const {
        contactSelected,
        setContactSelected,
        portfolioSelected,
        setPortfolioSelected,
        resumeSelected,
        setResumeSelected
    }=props;
    return (
        <div className="navigation">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul className="navbar-nav float-end">
                <li className="nav-item">
                    <a className={`nav-link ${(!contactSelected && !portfolioSelected && !resumeSelected) && 'active'}`} aria-current="page" href="#about" onClick={()=>{
                        setContactSelected(false);
                        setPortfolioSelected(false);
                        setResumeSelected(false)
                    }}>About me</a>
                </li>
                <li className="nav-item">
                    <a className={`nav-link ${portfolioSelected && 'active'}`} onClick={()=>{
                         setContactSelected(false);
                         setPortfolioSelected(true);
                         setResumeSelected(false)
                    }}>Portfolio</a>
                </li>
                <li className="nav-item">
                    <a className={`nav-link ${contactSelected && 'active'}`} onClick={()=>{
                         setContactSelected(true);
                         setPortfolioSelected(false);
                         setResumeSelected(false)
                    }}>Contact</a>
                </li>
                <li className="nav-item">
                    <a className={`nav-link ${resumeSelected && 'active'}`} onClick={()=>{
                         setContactSelected(false);
                         setPortfolioSelected(false);
                         setResumeSelected(true)
                    }}>Resume</a>
                </li>
                </ul>
            </div>
        </div>
    )
}

export default Navigation;