import React from "react";
import photo from "../../assets/photos/mee.jpg"
import icon from "../../assets/icons/tape1.png"

const Home = ()=>{
    return(
        <section>
            <div className="row">
                <div className="col-xs-12 col-6  pic-wrap">
                    <div className="pic-bg"></div>
                    <img className="my-pic" src={photo} alt="my picture"/>
                    <img className="tape" src={icon} alt=""/>
                </div>
                <div className="col-xs-12 col-6 intro-wrap">
                    <div className="intro">
                        <h1>Hi! my name is <br/> 
                            <span className="my-name"> Khaoula Jabour </span> 
                        </h1>
                        <p>I'm a full stack developer <br/>  based in Morrisville, NC</p>
                    </div>                 
                </div>           
            </div>
        </section>
    )
}

export default Home;