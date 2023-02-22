export const Participate = ({icon, title, text}) => {
    return(
        <div>
            <img className="mb-5" src={icon} alt="..."/>
            <p className="text-white text-2xl leading-relaxed">{title}</p>
            <p className="text-white text-base leading-relaxed">{text}</p>
        </div>
    )
}
