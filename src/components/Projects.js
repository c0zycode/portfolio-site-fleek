// Import Assets
import delivery from '../assets/delivery.png';
import portfolio from "../assets/portfolio-site.png"


const Projects = () => {
    return (
        <section className="projects">
            <h2>My Projects</h2>

            <div className="projects__cards">

                <div className="projects__card">
                    <h3>Portfolio Site</h3>
                    <img src={portfolio} alt="Portfolio Site Home Page" />
                    <p>My custom portfolio site built with React.js
                    </p>

                    <a href="https://github.com/c0zycode/" target="_blank" className="button">Code</a>
                </div>

                <div className="projects__card">
                    <h3>Delivery App</h3>
                    <img src={delivery} alt="Delivery App Page" />
                    <p>A delivery tracker built with Python and sqlite3
                    </p>
                    
                    <a href="https://github.com/c0zycode/delivery-app" target="_blank" className="button">Code</a>
                    
                </div>

            </div>
        </section>
    );
}

export default Projects;