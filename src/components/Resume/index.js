import React from "react";
// import resume from process.env.PUBLIC_URL + '/Khaoula-resume.pdf'

const Resume = ()=>{
    return(
        <section className="resume-section">
        <div className="row sub-section align-items-center">
          <div className="col-sm-12 col-md-3">
            <h2 className="section-title">Skills</h2>
          </div>
          <div className="col-sm-12 col-md-9">
            <div className="row justify-content-center">
              <div className="col-sm-10 col-md-5 skill-div">
                <h3 className="section-sub-title">Front End</h3>
                <div className="row p-2">
                  <div className="col-6">
                    <ul>
                      <li>HTML</li>
                      <li>Bootstrap</li>
                      <li>Javascript</li>
                      <li>Web APIs</li>
                    </ul>
                  </div>
                  <div className="col-6">
                    <ul>
                      <li>CSS</li>
                      <li>Foundation</li>
                      <li>JQuery</li>
                      <li>React</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-sm-10 col-md-5 skill-div">
                <h3 className="section-sub-title">Back End</h3>
                <div className="row p-2">
                  <div className="col-6 ">
                    <ul className="no-bullet">
                      <li>Node.js</li>
                      <li>OOP</li>
                      <li>SQL</li>
                      <li>GraphQL</li>
                    </ul>
                  </div>
                  <div className="col-6">
                    <ul>
                      <li>Express</li>
                      <li>MVC</li>
                      <li>MongoDB</li>
                      <li>Apollo</li>
                    </ul>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
        <div className="row sub-section align-items-center">
          <div className="col-sm-12 col-md-3">
            <h2 className="section-title">Education</h2>
          </div>
          <div className="col-sm-12 col-md-9">
            <div className="school-section">
              <small>MAR 2022</small>
              <h4>Coding Bootcamp, <span>UNC Chapel Hill</span></h4>
              <p>Full stack web development</p>
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