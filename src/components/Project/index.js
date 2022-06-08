import React from "react";

const Project =(props)=>{
    //   const {name, pic, description, link, repo} = props;
    const {project} = props;
    return(
        <div className="card-wrap align-self-stretch">
            <div className="card">
                <div className="card-image">
                    <img src={require(`../../assets/projects/${project.pic}.gif`)} className="card-img-top" alt={project.name}/>
                </div>
                <div className="card-body">
                    <h5 className="card-title">{project.name}</h5>
                    <p className="card-text">{project.description}</p>
                    <p className="card-tech"><span className="fw-semibold">Technologies: </span>{project.tech.join(", ")}.</p>
                    <a href={project.link} target="_blank" className="btn hire-btn me-2"><i class="fa-solid fa-link"></i> App link</a>
                    <a href={project.repo} target="_blank" className="btn hire-btn"><i class="fa-brands fa-github"></i> Github repo</a>
                </div>
            </div>
        </div>
    )

}

export default Project;