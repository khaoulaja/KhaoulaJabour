import React from "react";
import photo from "../../assets/photos/mee.jpg"

const Home = ()=>{
    return(
        <section >
            <div className="d-flex justify-content-around flex-wrap">
                <div className="pic-wrap">
                    <div className="pic-bg"></div>
                    <img className="my-pic" src={photo} alt="my picture"/>
                    <img className="tape" src="/tape1.png" alt=""/>
                </div>
                <div className="intro-wrap">
                    <div className="intro">
                        <h1>Hi! I'm <br/> 
                            <span className="my-name"> Khaoula Jabour </span> 
                        </h1>
                        <p>I'm a full stack react developer</p>
                        <button className="hire-btn">Resume</button>
                    </div>     
                </div>           
            </div>
      </section>
    )
}

export default Home;