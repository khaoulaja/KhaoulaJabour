import React from "react";
import Project from "../Project";

const projects=[
    {
        name: "Game Corner",
        pic: "game-corner",
        description: "It allows the user to keep track of its collection of games. The user can sign up to start building their list of games (favorite, hated, want to buy ...).",
        link: "https://afternoon-reef-79835.herokuapp.com/",
        repo: "https://github.com/kerbunker/game-collection"
    },
    {
        name: "Travel Buddy",
        pic: "travel-buddy",
        description: "It allows users to interact with selected countries and gain general information about it. It also has the translation of the most used phrases, as well as a gallery of the most famous cities and sight-seeings.",
        link: "https://khaoulaja.github.io/Travel-Buddy/",
        repo: "https://github.com/khaoulaja/Travel-Buddy"
    },
    {
        name: "Weather Dashboard",
        pic: "weather-dashboard",
        description: "It allows the user to search any city in the world and get the current weather as well as 5-day forcast. The user will be able to see the previously searched cities as well.",
        link: "https://khaoulaja.github.io/weather-dashboard/",
        repo: "https://github.com/khaoulaja/weather-dashboard"
    },
    {
        name: "Tech Park",
        pic: "tech-park",
        description: "It's a CMS-style blog site similar to a Wordpress site, where developers can publish their articles, blog posts and comment on other developers posts as well.",
        link: "https://tech-park-99.herokuapp.com/login",
        repo: "https://github.com/khaoulaja/TechPark"
    },
    {
        name: "Workday Scheduler",
        pic: "work-day",
        description: "It is a website where employees can create their schedules. They can add important events to a daily planner to manage time effectively.",
        link: "https://khaoulaja.github.io/work-day-scheduler/",
        repo: "https://github.com/khaoulaja/work-day-scheduler"
    },
    {
        name: "Code Quiz",
        pic: "code-quiz",
        description: "It's a website where you can take a timed quiz on JavaScript fundamentals and store your high scores so that you can gauge your progress compared to your peers.",
        link: "https://khaoulaja.github.io/code-quiz/",
        repo: "https://github.com/khaoulaja/code-quiz"
    }
]

const Portfolio = ()=>{
    return(
        <section className="work-section">
            <div>
                <h2 className="section-title">Work</h2>
                <h5>My recent projects</h5>
                <div className="row justify-content-around align-items-stretch">
                     {projects.map((project)=>(
                    <div className="col-sm-12 col-md-6 col-xl-4 p-3 align-self-stretch" key={project.name}>
                        <Project project={project}/>                        
                    </div>
                    ))}   
                </div>
                <small>To see more of my work checkout <a href="https://github.com/khaoulaja">my github account</a>.</small>
            </div>
        </section>
    )
}

export default Portfolio;
