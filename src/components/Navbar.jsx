export function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
      <div className="container">
        <a className="navbar-brand" href="/">
          Mini GPT-3{" "}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="ms-auto navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/">
                Traductor
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/image">
                Crear variación de imágen
              </a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link " href="/contact">
                Contacto
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
