import Education from './Education'
import TechStack from './TechStack';
import Projects from './Projects';

function Container() {
    return (
        <div className="flex flex-col h-screen w-4/5 top-0 left-0 border-r px-12 py-24">
            <h1 className="text-3xl font-bold">Education</h1>
            <Education></Education>

            <h1 className="text-3xl font-bold">Tech Stack</h1>
            <div>
            </div>
            
            <h1 id="projects" className="text-3xl font-bold">Projects</h1>
            <Projects></Projects>

            <h1 id="experience" className="text-3xl font-bold">Experience</h1>
        </div>
    )
}

export default Container;