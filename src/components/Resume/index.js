import React from "react";
// import resume from process.env.PUBLIC_URL + '/Khaoula-resume.pdf'

const Resume = ()=>{
    return(
        <section className="resume-section">
        <div className="row sub-section align-items-center">
          <div className="col-12">
            <h2 className="section-title">Skills</h2>
          </div>
          <div className="row my-3 mx-0 align-items-center">
          <div className="col-md-12 col-lg-3">
          <h3 className="section-sub-title">Front End</h3>
          </div>
          <div className="col-md-12 col-lg-9">
              <div className="row justify-content-around text-center">
              <div className="col-xs-2 col p-2 m-2 skill">
                  HTML
              </div> 
              <div className="col-xs-2 col p-2 m-2 skill">
                  Bootstrap
              </div> 
              <div className="col-xs-2 col p-2 m-2 skill">
                  Javascript
              </div> 
              <div className="col-xs-2 col p-2 m-2 skill">
                  Web APIs
              </div> 
              </div>
              <div className="row justify-content-around text-center">
              <div className="col p-2 m-2 skill">
                  CSS
              </div> 
              <div className="col p-2 m-2 skill">
                  Foundation
              </div> 
              <div className="col p-2 m-2 skill">
                  JQuery
              </div> 
              <div className="col p-2 m-2 skill">
                  React.js
              </div> 
              </div>
            
          </div>
          </div>
          <div className="row my-3 mx-0 align-items-center">
          <div className="col-md-12 col-lg-3">
          <h3 className="section-sub-title">Back End</h3>
          </div>
          <div className="col-md-12 col-lg-9">
              <div className="row justify-content-around text-center">
              <div className="col p-2 m-2 skill">
                  Node.js
              </div> 
              <div className="col p-2 m-2 skill">
                  Express
              </div> 
              <div className="col p-2 m-2 skill">
                SQL
              </div>  
              <div className="col p-2 m-2 skill">
                  MongoDB
              </div> 
              </div>
              <div className="row justify-content-around text-center">
              <div className="col p-2 m-2 skill">
                  MVC
              </div> 
              <div className="col p-2 m-2 skill">
                  OOP
              </div>
              <div className="col p-2 m-2 skill">
                  GraphQL
              </div> 
              <div className="col p-2 m-2 skill">
                  Apollo
              </div> 
              </div>
              
          </div>
          </div>
        </div>
        <div className="row sub-section align-items-center">
          <div className="col-12">
            <h2 className="section-title">Education</h2>
          </div>
          <div className="col-12">
            <div className="school-section">
              <small>MAR 2022</small>
              <h4>Coding Bootcamp, <span>UNC Chapel Hill</span></h4>
              <p>Full stack web development certificate</p>
            </div>
            <div className="school-section">
              <small>JUL 2017</small>
              <h4>Bachelor's degree, <span>Superior School Of Technology - Meknes, Morocco</span></h4>
              <p>Development of information and communication systems (software development)</p>
            </div>
            <div className="school-section">
              <small>JUL 2016</small>
              <h4>Associated degree, <span>Superior School Of Technology - Meknes, Morocco</span></h4>
              <p>Computer science</p>
            </div>
          </div>
        </div> 
        <div className="row">

        <a href="resume/resume.pdf" download="khaoula-resume" className="mt-2"><i className="fas fa-download"></i> Download Resume</a>
        </div>    
      </section>
    )
}

export default Resume;