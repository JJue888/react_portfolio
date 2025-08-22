import { PROJECT_DATA } from "../data/projects";
import WorkDisplay from "../components/WorkDisplay";
import {Link} from "react-router-dom";
import classes from "./Projects.module.css"

function ProjectsPage() {
    return (
        <>
            <div>
                <header className={classes.head}>
                    <h1 className="">Projects</h1>
                </header>
                <div className={classes.projects}>
                    <ul>
                        {PROJECT_DATA.map((project) => (
                            <li key={project.title} className={classes.projectContainer}>
                                <Link to={project.title}>
                                    <WorkDisplay {...project} />
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default ProjectsPage;