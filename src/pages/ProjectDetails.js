import {useParams} from "react-router-dom";

import {PROJECT_DATA} from "../data/projects";
import WorkDetails from "../components/WorkDetails";

function ProjectDetailsPage() {
    const params = useParams();
    const foundProject = PROJECT_DATA.find((project) => project.title === params.projectTitle);
    return (
        <>
            <WorkDetails {...foundProject} />
        </>)
}

export default ProjectDetailsPage;