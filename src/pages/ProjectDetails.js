import {useParams} from "react-router-dom";

import { PROJECT_DATA } from "../data/projects";

function ProjectDetailsPage() {
    const params = useParams();
    const foundProject = PROJECT_DATA.find((project)   => project.title === params.projectTitle);
    return (
        <>
            <h1>Projects</h1>
            <p>{params.projectTitle}</p>
            <img src={foundProject.image[0]} alt={params.projectTitle} />
            <ul>
                {foundProject.description.map((description, index) => (
                    <p key={index}>{description}</p>
                ))}
            </ul>
        </>)
}

export default ProjectDetailsPage;