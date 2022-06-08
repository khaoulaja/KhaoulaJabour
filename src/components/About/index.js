import React from 'react'
import photo from '../../assets/photos/pic2.jpg'
// import Home from '../Home';

const About = ()=>{
    return(
      <>
        {/* <Home/> */}
        <section id="about">
          <h2 className="section-title">About me</h2>
          <div className="row m-5">
              <div className="col-md-12 col-lg-8 section-txt">
                  <div className="section-content">
                    
                      <div className='section-info'>
                        <p>
                        <span className='about-intro'>Hi! My name is Khaoula Jabour. </span>
                        I'm a Full stack web developer with strong organizational and analytical skills. Also known as an innovative problem solver passionate about developing web applications with a focus on responsive web design.</p>
                        <p>
                        I received my Bachelor's degree in Computer Science from the Superior School of Technology in Fes, Morocco.
                        I also recently earned a certificate in full stack web development from the UNC Chapel Hill coding bootcamp where I completed several projects, the most recent of which was a single-page mern app that helps users to keep track of their car records.</p>
                        <p>
                        These projects combined with my two years of experience including Operations Support and multiple internships allowed me to work in a teamwork environment and was an opportunity to showcase my skills.

                        </p>
                      </div>
                      <hr/>
                      <div className='section-info'>
                        <div className='info'><i class="fa-solid fa-location-dot"></i> Morrisville, NC</div>
                        <div className='info'><i class="fa-solid fa-phone"></i> 919-717-9368</div>
                        <div className='info'><i class="fa-solid fa-envelope"></i> khaoulajabour4@gmail.com</div>
                        <div className='mt-4'><a href="resume/resume.pdf" download="khaoula-resume" className='hire-btn'>
                          <i class="fa-solid fa-download"></i> Download My Resume</a></div>
                      </div>

                    
                  </div>                 
              </div> 
              <div className="col-md-12 col-lg-4 section-pic">
                <div className='pic-wrap'>
                  <img className="pic2" src={photo} alt="my picture"/>
                </div>
            </div>          
          </div>
        </section>
      </>
    )
}

export default About;