import React from 'react'
import photo from '../../assets/photos/pic2.jpg'

const About = ()=>{
    return(
        <section id="about">
        <div className="row">
             <div className="col-sm-12 col-md-6 section-txt">
                <div className="section-content">
                    <h2 className="section-title">About me</h2>
                    <p>
                       I have been obsessed with computers since I was a little girl. While other kids were playing with their toys, I was always looking for anything that looks like a keyboard so I can pretend to be a computer nerd. 
                      <br/><br/>  After I got my bachelor’s degree in Computer Sience from the Superior School of Technology in Meknes, Morocco, I went on to complete multiple internships at some of the largest companies in the country. I also volunteered at various nonprofit institutions, and I taught other girls the basics of coding. 
                      <br/><br/> Before coming to the USA, I was working as an Operations Support Technician at the Exela Technologies branch in Fes, Morocco, where I was able to implement my problem-solving qualities and take the initiative in developing solutions to improve productivity. 
                      <br/> After I moved to the USA, I decided to join a web development bootcamp at UNC Chapel Hill so I can widen my knowledge in the field and learn more about some of the most used programming languages in the world.
                     <br/><br/> When I’m not coding, I’m probably hanging out with my husband or my girlfriends, trying a new recipe or out shopping. I also like to browse YouTube for any web development related videos and tutorials.   
                  </p>
                </div>                 
            </div> 
            <div className="col-sm-12 col-md-6 section-pic">
                <img className="pic2" src={photo} alt="my picture"/>
          </div>          
        </div>
      </section>
    )
}

export default About;