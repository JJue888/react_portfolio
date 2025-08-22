import MeImg from '../assets/me/juejw.jpg'
import classes from "./pages/About.module.css"

function AboutPage() {
    return (
        <>
            <div className="flex flex-row justify-around items-center p-[2.5%]">
                <div>
                    <img src={MeImg} alt="me" />
                </div>
                <div className="pl-[5%] flex items-start flex-col">
                    <h2 className="text-2xl text-center pb-[5%] text-black">About Me</h2>
                    <p className="text-black">Hi, welcome to my website. I'm Joshua Jue, a Senior Computer Science and Software Engineering major at Rose-Hulman Institute of
                        Technology. I'm interested in a variety of topics in Computer Science. Feel free to look around my projects
                        and reach out to me!
                    </p>
                </div>
            </div>
        </>
    )
}

export default AboutPage;