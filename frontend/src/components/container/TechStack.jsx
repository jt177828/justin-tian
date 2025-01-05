function TechStack() {
    const languageList = [
        {icon: '<i className="devicon-python-plain"></i>', name: 'Python'},
        {icon: '<i className="devicon-html5-plain"></i>' , name: 'HTML'},
        {icon: '<i className="devicon-css3-plain"></i>', name: 'CSS'},
        {icon: '<i className="devicon-javascript-plain"></i>', name: 'JavaScript'},
        {icon: '<i className="devicon-java-plain"></i>', name: 'Java'},
        {icon: '<i className="devicon-c-plain"></i>', name: 'C'},
    ];
    const frameworksLibraries= [
        {icon: '<i className="devicon-react-original"></i>', name: 'React'},
        {icon: '<i className="devicon-tailwindcss-original"></i>', name: 'Tailwind'},
    ];
    const devTools = [
        {icon: '<i className="devicon-vscode-plain"></i>', name: 'VSCode'},
        {icon: '<i className="devicon-github-original"></i>', name: 'Github'},
        {icon: '<i className="devicon-git-plain"></i>', name: 'Git'},
        {icon: '<i className="devicon-linux-plain"></i>', name: 'Linux'},
        {icon: '<i className="devicon-powershell-plain"></i>', name: 'Powershell'},
        {icon: '<i className="devicon-vite-original"></i>', name: 'Vite'},
    ];   

    return (
        <ul>
            {devTools.map((item) => <li>item.icon</li>)}
        </ul>
     )
}
 
export default TechStack;