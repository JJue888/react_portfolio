import { useParams, Link } from "react-router-dom";
import { PROJECT_DATA } from "../data/projects";
import WorkDetails from "../components/WorkDetails";
import classes from "./ProjectDetails.module.css";

function ProjectDetailsPage() {
    const params = useParams();
    const foundProject = PROJECT_DATA.find(
        (project) => project.title === params.projectTitle
    );

    if (!foundProject) {
        return (
            <div className={classes.notFound}>
                <p>Project not found.</p>
                <Link to="/react_portfolio/projects" className={classes.notFoundLink}>
                    ← Back to projects
                </Link>
            </div>
        );
    }

    return (
        <div className={classes.page}>
            <WorkDetails {...foundProject} />
        </div>
    );
}

export default ProjectDetailsPage;
