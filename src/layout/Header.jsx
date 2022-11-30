import { HashLink as Link } from 'react-router-hash-link';

const Header = () => {
  return <>
      <nav className="navbar navbar-expand-sm navbar-light">
        <div className="container">
            <Link to="/">
                <a className="navbar-brand" href="/"><i className='uil uil-user'></i> will-oracions</a>
            </Link>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                <span className="navbar-toggler-icon"></span>
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav mx-auto">
                    <Link to="/">
                        <li className="nav-item">
                            <a href="index.html" className="nav-link"><span data-hover="Home">Home</span></a>
                        </li>
                    </Link>

                    <Link to="/skills">
                        <li className="nav-item">
                            <a href="skills.html" className="nav-link"><span data-hover="Skills">Skills</span></a>
                        </li>
                    </Link>

                    <Link to="/coding">
                        <li className="nav-item">
                            <a href="coding.html" className="nav-link"><span data-hover="Coding">Coding</span></a>
                        </li>
                    </Link>

                    <Link to="/projects">
                        <li className="nav-item">
                            <a href="projects.html" className="nav-link"><span data-hover="Projects">Projects</span></a>
                        </li>
                    </Link>

                    <Link to="/#contact">
                        <li className="nav-item">
                            <a href="index.html#contact" className="nav-link"><span data-hover="Contact">Contact</span></a>
                        </li>
                    </Link>

                        
                    <li className="nav-item">
                      <div>
                        <a href="/resume" target="_blank"  className="btn mr-lg-2 custom-btn nav-btn"><i className='uil uil-file-alt'></i> Resume</a>
                      </div>
                    </li>
                </ul>

            </div>
        </div>
    </nav>
  </>;
}

export default Header;