import ProjectCard from "./ProjectCard";

import { FaPython, FaHtml5, FaCss3Alt, FaJs, FaJava, FaReact, FaGithub, FaLinux } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa6"; 
import { SiC, SiVite } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { VscVscode, VscTerminalPowershell } from "react-icons/vsc";

function Projects() {
    return (
        <div>
            <ProjectCard
            date='2022'
            name='DictBot'
            description='Developed a discord bot that provides definitions, synonyms, antonyms, and more for user inputted words (submission for YRHacks 2022)'
            picture='nope'
            link='https://github.com/jt177828/dict-bot'
            stack={[{icon: <FaPython />, name: 'Python'},
                    ]}
            />
            <ProjectCard
                date='December 2024 - Present'
                name='Portfolio Website'
                description="You're looking at it right now!"
                picture='nope'
                link='https://github.com/jt177828/justin-tian'
                stack={[{icon: <FaReact />, name: 'React'},
                    {icon: <RiTailwindCssFill />, name: 'Tailwind'},
                        {icon: <FaHtml5 />, name: 'HTML'},
                        {icon: <FaCss3Alt />, name: 'CSS'},
                        {icon: <FaJs />, name: 'JavaScript'},
                        ]}
            />
            <ProjectCard
                date='December 2024 - Present'
                name='CrypTrac (under development)'
                description="Developing the front-end of a web app where you can track different cryptocurrencies"
                picture='nope'
                link='https://github.com/jt177828/cryptrac'
                stack={[{icon: <FaReact />, name: 'React'},
                    {icon: <RiTailwindCssFill />, name: 'Tailwind'},
                        {icon: <FaHtml5 />, name: 'HTML'},
                        {icon: <FaCss3Alt />, name: 'CSS'},
                        {icon: <FaJs />, name: 'JavaScript'},
                        ]}
            />
        </div>
        
    )
}

export default Projects;