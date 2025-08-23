import classes from './WorkDetails.module.css'

function WorkDetails({title, description, image}) {
    return (
        <div className={classes.workWrapper}>
            <header>
                <h1>{title}</h1>
            </header>
            <img src={image[0]} alt={title}/>
            <ul>
                {description.map((text, index) => (
                    <p key={index}>{text}</p>
                ))}
            </ul>
        </div>
    )
}

export default WorkDetails;