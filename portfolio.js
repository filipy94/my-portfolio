const myProjects = [
    {
        name: "Numeral-Roman Converter",
        img: "https://thumbs.dreamstime.com/b/seamless-set-background-roman-numerals-color-background-flat-design-vector-illustration-seamless-set-background-roman-101541888.jpg",
        repository: "https://github.com/filipy94/roman-number-converter",
        page: "https://filipy94.github.io/roman-number-converter/"
    },
    {
        name: "Random Quote Machine",
        img: "https://bortoletti.com/wp-content/uploads/2020/10/Feather-quill-pen-ink-nib-Leonardo-Vitruviano-02-1200x1200.jpg",
        repository: "https://github.com/filipy94/random-quote-machine",
        page: "https://filipy94.github.io/random-quote-machine/"
    },
    {
        name: "Markdown Previewer",
        img: "https://receitasdecodigo.com.br/image/markdown-2017-06-20-17-55-36.jpg",
        repository: "https://github.com/filipy94/markdown-previewer",
        page: "https://filipy94.github.io/markdown-previewer/"
    },
    {
        name: "Filipy Portfolio",
        img: "https://neilpatel.com/wp-content/uploads/2017/12/portfolio.jpg",
        repository: "https://github.com/filipy94/my-portfolio",
        page: "https://filipy94.github.io/my-portfolio/"
    },
    {
        name: "Other Repositories",
        img: "https://shifter.sapo.pt/wp-content/uploads/2020/04/GitHub-Gratuito-Shifter_01.jpg",
        repository: "https://github.com/filipy94?tab=repositories",
        page: "https://github.com/filipy94?tab=repositories"
    }
];

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: myProjects,
        };
    };
    render() {
        return (
            <div id="main">
                <Welcome />
                <Header />
                <div id="project-grid">
                    {this.state.projects.map(proj => {
                        return <Project project={proj} />;
                    })}
                </div>
            </div> 
        );
    };
};
class Header extends React.Component {
    render() {
        return (
            <nav id="header">
                <a 
                    className="links" 
                    href="mailto: filipy94@gmail.com" 
                    target="_blank" title="My E-mail">
                        <i class="fa fa-envelope"/> Contact
                </a>
                <a 
                    className="links" 
                    href="https://github.com/filipy94" 
                    target="_blank" title="My Github Page">
                        <i class="fa fa-github-square"/> Github
                </a>
                <a 
                    className="links" 
                    href="https://www.linkedin.com/in/filipy-dellagnolo-477860215/" 
                    target="_blank" 
                    title="My Linkedin Page">
                        <i class="fa fa-linkedin-square"/> Linkedin
                </a>
            </nav>
        );
    };
};
class Welcome extends React.Component {
    render() {
        return (
            <div id="welcome-section">
                <h1>I am Filipy Dellagnolo</h1>
                <h3>I am a civil engineer who graduated 4 years ago and decided this year to go deeper into program development studies, below you can check out some personal study projects:</h3>
            </div>
        );
    };
};
class Project extends React.Component {
    constructor(props) {
        super(props);
    };
    render() {
        return (
            <div className="project">
                <a className="links" target="_blank" href={this.props.project.page}>
                    <h3 className="project-title"><span class="code">&lt;</span> {this.props.project.name} <span class="code">&#47;&gt;</span></h3>
                    <img className="project-image" src={this.props.project.img} alt={this.props.project.name} />
                </a>
                <a className="links" target="_blank" href={this.props.project.repository}><p><span class="code">&lt;</span> Repository <span class="code">&#47;&gt;</span></p></a>
            </div>
        );
    };  
};

ReactDOM.render(<App />, document.getElementById("app"))