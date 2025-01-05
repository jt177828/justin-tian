function Sidebar() {
  const navLinks = [
    {name: "Projects", link: '#projects'},
    {name: "Experience", link: '#experience'},
  ];

  const socialLinks = [{link: 'https://github.com/jt177828', icon: '<i class="devicon-github-original"></i>'},
                      {link: 'https://www.linkedin.com/in/justintian72/', icon: '<i class="devicon-github-original"></i>'},
                      {link: 'https://github.com/jt177828', icon: '<i class="devicon-github-original"></i>'},
  ];

  return (
    <div className="flex flex-col h-screen w-1/5 top-0 left-0 border border-gray-700 px-9 py-24">
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
      <div className="flex-none">
        <ul className="space-y-4">
          {socialLinks.map((item) => (
            <li key={item}>
              <a className="hover:text-sky-400 transition-colors cursor-pointer">{item}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;