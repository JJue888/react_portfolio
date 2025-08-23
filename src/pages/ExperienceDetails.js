import {useParams} from "react-router-dom";
import {EXPERIENCE_DATA} from "../data/experience"
import WorkDetails from "../components/WorkDetails";

function ExperienceDetailsPage() {
    const params = useParams();
    const foundProject = EXPERIENCE_DATA.find((project) => project.title === params.experienceTitle);
    return (
        <>
            <WorkDetails {...foundProject} />
        </>)
}

export default ExperienceDetailsPage;