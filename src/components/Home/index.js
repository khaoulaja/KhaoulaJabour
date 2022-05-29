import React from "react";
import pic from "../../assets/photos/pic.jpg"
const Home = ()=>{
    return(
        <section>
            <div className="row">
                <div className="col-xs-12 col-md-6 text-center ">
                    <img className="my-pic" src={pic} alt="my picture"/>
                </div>
                <div className="col-xs-12 col-md-6 intro-wrap">
                    <div className="intro w-content text-left">
                        <h1 className="my-name">Hello! <br/> I'm  
                             Khaoula <br/> Jabour 
                        </h1>
                        <p>Full Stack Web Developer <br/>  based in Morrisville, NC</p>
                    </div>                 
                </div>           
            </div>
        </section>
    )
}

export default Home;