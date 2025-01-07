import { FaPython, FaHtml5, FaCss3Alt, FaJs, FaJava, FaReact, FaGithub, FaLinux } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa6"; 
import { SiC, SiVite } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { VscVscode, VscTerminalPowershell } from "react-icons/vsc";

function TechStack() {
    const languageList = [
        {icon: <FaPython />, name: 'Python'},
        {icon: <FaHtml5 />, name: 'HTML'},
        {icon: <FaCss3Alt />, name: 'CSS'},
        {icon: <FaJs />, name: 'JavaScript'},
        {icon: <FaJava />, name: 'Java'},
        {icon: <SiC />, name: 'C'},
    ];
    const frameworksLibraries= [
        {icon: <FaReact />, name: 'React'},
        {icon: <RiTailwindCssFill />, name: 'Tailwind'},
    ];
    const devTools = [
        {icon: <VscVscode />, name: 'VSCode'},
        {icon: <FaGithub />, name: 'Github'},
        {icon: <FaGitAlt />, name: 'Git'},
        {icon: <FaLinux />, name: 'Linux'},
        {icon: <VscTerminalPowershell />, name: 'Powershell'},
        {icon: <SiVite />, name: 'Vite'},
    ];


    const TechStackItems = (techStackItems) => {
        return (
            <div className="text-3xl p-2 space-y-6">
                <ul className='gap-4 flex'>
                    {techStackItems.map((item) =>
                        <li key={item.name}>
                            <div className='w-fit border-2 hover:border-alt py-2 px-2 rounded-xl text-base text-text hover:text-sky-400 transition-colors duration-100 flex flex-row items-center gap-4 group'>
                            {item.icon}
                            {item.name}
                            </div> 
                        </li>
                    )}
                </ul>  
            </div> 
        );
    }

    return (
        <div className='px-6 py-14'>

            <div className="mb-8">
                <h1 className='text-xl text-alt font-semibold pb-3'>Languages:</h1>
                {TechStackItems(languageList)}
            </div>
            <div className='text-xl text-alt font-semibold pb-3'>
                <h1 className='text-xl pb-3'>Frameworks/Libraries:</h1>
                {TechStackItems(frameworksLibraries)}
            </div>
            <div>
                <h1 className='text-xl text-alt font-semibold pb-3'>Developer Tools:</h1>
                {TechStackItems(devTools)}
            </div>
        </div>
     )
}
 
export default TechStack;