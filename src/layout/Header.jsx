import { HashLink as Link } from "react-router-hash-link";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-light">
        <div className="container">
          <Link to="/">
            <a className="navbar-brand" href="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 512 512">
                <path
                  fill="currentColor"
                  d="M16 44v424a12 12 0 0 0 12 12h456a12 12 0 0 0 12-12V44a12 12 0 0 0-12-12H28a12 12 0 0 0-12 12Zm57.51 193.5l76.88-61.5l-76.88-61.5l20-25l108.1 86.5L93.5 262.49ZM272 256h-96v-32h96Z"
                />
              </svg>
              <span className="ml-2">will-oracions</span>
            </a>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            <span className="navbar-toggler-icon"></span>
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <Link to="/">
                <li className="nav-item">
                  <a href="/" className="nav-link">
                    <span data-hover="Home">Home</span>
                  </a>
                </li>
              </Link>

              <Link to="/skills">
                <li className="nav-item">
                  <a href="/skills" className="nav-link">
                    <span data-hover="Skills">Skills</span>
                  </a>
                </li>
              </Link>

              <Link to="/coding">
                <li className="nav-item">
                  <a href="/coding" className="nav-link">
                    <span data-hover="Coding">Coding</span>
                  </a>
                </li>
              </Link>

              <Link to="/projects">
                <li className="nav-item">
                  <a href="/projects" className="nav-link">
                    <span data-hover="Projects">Projects</span>
                  </a>
                </li>
              </Link>

              <Link to="/#contact">
                <li className="nav-item">
                  <a href="/#contact" className="nav-link">
                    <span data-hover="Contact">Contact</span>
                  </a>
                </li>
              </Link>

              <li className="nav-item">
                <div>
                  <a
                    href="/US-cv-Jan-2025-MONJENGUE-LOUIS-MARY.pdf"
                    target="_blank"
                    className="btn mr-lg-2 custom-btn nav-btn">
                    <i className="uil uil-file-alt"></i> Resume
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
