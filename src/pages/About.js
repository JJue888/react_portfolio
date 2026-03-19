import MeImg from '../assets/me/juejw.jpg';
import classes from './About.module.css';

const details = [
    { label: "Degree", value: "B.S. CS & Software Engineering" },
    { label: "School", value: "Rose-Hulman Institute of Technology" },
    { label: "Status", value: "Senior" },
    { label: "Location", value: "Terre Haute, IN" },
];

function AboutPage() {
    return (
        <div className={classes.page}>
            <span className={classes.eyebrow}>Who I am</span>
            <h1 className={classes.pageTitle}>About Me</h1>

            <div className={classes.layout}>
                <div className={classes.imageWrapper}>
                    <img src={MeImg} alt="Joshua Jue" />
                </div>

                <div className={classes.text}>
                    <div>
                        <h2>Hi, I'm Josh</h2>
                        <div className={classes.divider} />
                        <p>
                            Welcome to my portfolio. I'm a Senior Computer Science and Software Engineering
                            major at Rose-Hulman Institute of Technology with a broad interest in what software
                            can do — from systems design to full-stack development. Feel free to explore my
                            projects and don't hesitate to reach out.
                        </p>
                    </div>

                    <div className={classes.detailGrid}>
                        {details.map((d) => (
                            <div key={d.label} className={classes.detailItem}>
                                <span className={classes.detailLabel}>{d.label}</span>
                                <span className={classes.detailValue}>{d.value}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutPage;
