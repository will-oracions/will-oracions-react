const Header = () => {
  return <>
      <nav class="navbar navbar-expand-sm navbar-light">
        <div class="container">
            <a class="navbar-brand" href="index.html"><i class='uil uil-user'></i> will-oracions</a>

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                <span class="navbar-toggler-icon"></span>
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav mx-auto">
                    <li class="nav-item">
                        <a href="index.html" class="nav-link"><span data-hover="Home">Home</span></a>
                    </li>
                    <li class="nav-item">
                        <a href="skills.html" class="nav-link"><span data-hover="Skills">Skills</span></a>
                    </li>
                    <li class="nav-item">
                        <a href="coding.html" class="nav-link"><span data-hover="Coding">Coding</span></a>
                    </li>
                    <li class="nav-item">
                        <a href="projects.html" class="nav-link"><span data-hover="Projects">Projects</span></a>
                    </li>
                    <li class="nav-item">
                        <a href="index.html#contact" class="nav-link"><span data-hover="Contact">Contact</span></a>
                    </li>

                    
                    <li class="nav-item">
                      <div>
                        <a href="/resume.html" target="_blank"  class="btn mr-lg-2 custom-btn nav-btn"><i class='uil uil-file-alt'></i> Resume</a>
                      </div>
                    </li>
                </ul>

            </div>
        </div>
    </nav>
  </>;
}

export default Header;