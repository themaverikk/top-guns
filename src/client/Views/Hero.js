export function Hero() {
  return (
    <header id="home" className="hero-area">
      <div className="overlay">
        <span></span>
        <span></span>
      </div>
      <nav className="navbar navbar-expand-md bg-inverse fixed-top scrolling-navbar">
        <div className="container">
          <a href="/" className="navbar-brand">
            <img src="img/logo.png" alt="" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="lni-menu"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav mr-auto w-100 justify-content-end">
              <li className="nav-item">
                <a className="nav-link page-scroll" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link page-scroll" href="#services">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link page-scroll" href="#features">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link page-scroll" href="#showcase">
                  Showcase
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link page-scroll" href="#team">
                  Team
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link page-scroll" href="#blog">
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link page-scroll" href="#contact">
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <a className="btn btn-singin" href="#">
                  Download
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container">
        <div className="row space-100">
          <div className="col-lg-6 col-md-12 col-xs-12">
            <div className="contents">
              <h2 className="head-title">
                Work Remotely From Your Home or Places
              </h2>
              <p>
                Please, Purchase full version of Slick to get all pages,
                features and permission to use in commercial projects
              </p>
              <div className="header-button">
                <a
                  href="/hire/quiz/dev-resources"
                  className="btn btn-border-filled"
                >
                  Hire Remote Engineers
                </a>
                <a
                  href="https://rebrand.ly/slick-ud"
                  rel="nofollow"
                  target="_blank"
                  className="btn btn-border page-scroll"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-xs-12 p-0">
            <div className="intro-img">
              <img src="img/intro.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
