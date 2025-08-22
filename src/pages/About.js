import MeImg from '../assets/me/juejw.jpg'
import classes from './About.module.css'

function AboutPage() {
    return (
        <>
            <div className={classes.wrapper}>
                <div>
                    <img src={MeImg} alt="me" />
                </div>
                <div className={classes.text}>
                    <h2>About Me</h2>
                    <p>Hi, welcome to my website. I'm Joshua Jue, a Senior Computer Science and Software Engineering major at Rose-Hulman Institute of
                        Technology. I'm interested in a variety of topics in Computer Science. Feel free to look around my projects
                        and reach out to me!
                    </p>
                </div>
            </div>
        </>
    )
}

export default AboutPage;