import { PROJECT_DATA } from "../data/projects";
import WorkDisplay from "../components/WorkDisplay";
import { Link } from "react-router-dom";
import classes from "./Projects.module.css";

function ProjectsPage() {
    return (
        <div className={classes.page}>
            <header className={classes.head}>
                <span className={classes.eyebrow}>Portfolio</span>
                <h1>Projects</h1>
            </header>

            <div className={classes.grid}>
                {PROJECT_DATA.map((project) => (
                    <Link to={project.title} key={project.title}>
                        <WorkDisplay {...project} />
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default ProjectsPage;
