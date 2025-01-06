import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFile } from "react-icons/fa";

function Sidebar() {
  const navLinks = [
    {name: "Projects", link: '#projects'},
    {name: "Experience", link: '#experience'},
  ];

  return (
    <div className="hidden md:flex flex-col w-full md:w-72 top-0 left-0 h-screen fixed border-r-2 border-gray-700 px-4 md:px-7 py-12">
      {/* Hero */}
      <div className="flex-none">

        <a href="#education" className='hover:text-sky-400 transition-colors cursor-pointer'>
          <ul className="space-y-2">
            <li><a><h1 className="font-bold text-5xl">Justin Tian</h1></a></li>
            <li><a><h5 className="font-bold text-alt text-3xl">Math @ UWaterloo</h5></a></li>
          </ul>
        </a>

      </div>

      {/* Nav links */}
      <div className="flex-1 flex items-center">
        <ul className="space-y-16">
          {navLinks.map((item) => (
            <li className="text-3xl" key={item}>
              <a href={item.link} className="hover:text-sky-400 transition-colors cursor-pointer">{item.name}</a>
            </li>
          ))}
        </ul>
      </div>

      {/* Github, linkedin, resume */}
      <div className="flex">
        <ul className="gap-14 text-3xl flex">
          <li>
            <a href='https://github.com/jt177828' target='blank' className="hover:text-sky-400 transition-colors cursor-pointer">
              <FaGithub />
            </a>
          </li>
          <li>
            <a href='https://www.linkedin.com/in/justintian72/' target='blank' className="hover:text-sky-400 transition-colors cursor-pointer">
              <FaLinkedin />
            </a>
          </li>
          <li>
            <a href='/assets/course-notes.pdf' target='blank' className="hover:text-sky-400 transition-colors cursor-pointer">
              <FaFile/>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;