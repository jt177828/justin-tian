import Education from './Education'
import TechStack from './techstack/TechStack';
import Projects from './Projects/Projects'

function Container() {
    return (
        <div className="flex-1 ml-0 md:ml-96 px-4 md:px-20 py-14 h-screen overflow-y-auto">
            <h1 className="text-3xl font-bold">Education</h1>
            <Education></Education>

            <h1 className="text-3xl font-bold">Tech Stack</h1>
            <TechStack />

            <h1 id="projects" className="text-3xl font-bold">Projects</h1>
            <Projects></Projects>
        </div>
    )
}

export default Container;