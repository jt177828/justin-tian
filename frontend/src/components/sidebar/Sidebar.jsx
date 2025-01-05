import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFile } from "react-icons/fa";

function Sidebar() {
  const navLinks = [
    {name: "Projects", link: '#projects'},
    {name: "Experience", link: '#experience'},
  ];

  return (
    <div className="flex flex-col h-screen w-100 top-0 left-0 border border-gray-700 px-9 py-24">
      {/* Hero */}
      <div className="flex-none">
        <ul className="space-y-2">
          <li><a><h1 className="font-bold text-5xl">Justin Tian</h1></a></li>
          <li><a><h5 className="font-bold text-alt text-3xl">Math @ UWaterloo</h5></a></li>
        </ul>
      </div>

      {/* Nav links */}
      <div className="flex-1 flex items-center">
        <ul className="space-y-2">
          {navLinks.map((item) => (
            <li className="text-3xl" key={item}>
              <a href={item.link} className="hover:text-sky-400 transition-colors cursor-pointer">{item.name}</a>
            </li>
          ))}
        </ul>
      </div>

      {/* Github, linkedin, resume */}
      <div className="flex">
        <ul className="gap-14 text-5xl flex">
          <li>
            <a href='https://github.com/jt177828' target='blank'>
              <FaGithub />
            </a>
          </li>
          <li>
            <a href='https://www.linkedin.com/in/justintian72/' target='blank'>
              <FaLinkedin />
            </a>
          </li>
          <li>
            <a href='/assets/course-notes.pdf' target='blank'>
              <FaFile />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;