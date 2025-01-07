import { FaGithub } from "react-icons/fa";

const ProjectCard = ({ date, name, description, picture, link, stack }) => {
    if (picture === 'nope') {
        return (
            <div className="text-3xl px-6 py-14">
                <h3 className="text-xl font-bold text-alt">{date}</h3>
                <div className='flex gap-8'>
                    <h1 className='text-4xl font-bold'>{name}</h1>
                    <a href={link} target='blank' className='w-fit border-2 hover:border-alt py-2 px-2 rounded-xl text-sm text-text hover:text-sky-400 transition-colors duration-100 flex flex-row items-center gap-4 group'>
                            <FaGithub />
                            Github
                    </a>
                </div>
                <p className="text-base mt-4">{description}</p>
                <ul className='gap-4 flex mt-4'>
                    {stack.map((item) =>
                        <li key={item.name}>
                            <div className='w-fit border-2 hover:border-alt py-2 px-2 rounded-xl text-base text-text hover:text-sky-400 transition-colors duration-100 flex flex-row items-center gap-4 group'>
                            {item.icon}
                            {item.name}
                            </div> 
                        </li>
                    )}
                </ul>  
            </div> 
        )
    }
    return (
        <div className="text-3xl px-6 py-14">
            <h3 className="text-xl font-bold text-alt">{date}</h3>
            <div className='flex gap-8'>
                <h1 className='text-4xl font-bold'>{name}</h1>
                <a href={link} target='blank' className='w-fit border-2 hover:border-slate-500 py-2 px-4 rounded-xl text-sm font-semibold text-slate-500 hover:text-slate-300 transition-colors duration-100 flex flex-row items-center gap-4 group'>
                        <FaGithub />
                        Github
                </a>
            </div>
            <img src={picture} alt={name}></img>
            <p className="text-base mt-4">{description}</p>
            <ul className='gap-4 flex mt-4'>
                {stack.map((item) =>
                    <li key={item.name}>
                        <div className='w-fit border-2 hover:border-alt py-2 px-2 rounded-xl text-base text-text hover:text-sky-400 transition-colors duration-100 flex flex-row items-center gap-4 group'>
                        {item.icon}
                        {item.name}
                        </div> 
                    </li>
                )}
            </ul>  
        </div> 
    
    )
}
 
export default ProjectCard;