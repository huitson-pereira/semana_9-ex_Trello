export const Header = () => {
  return (
    <header className="header bg-body-secondary">
      <nav className="navbar navbar-expand-lg  container d-flex ">
        <span className="flex-grow-1">Tarefas.dev</span>
        <ul class="navbar-nav ">
          <li class="nav-item me-auto">
            <link class="nav-link active" aria-current="page" to="/home">
              Home
            </link>
          </li>
          <li class="nav-item">
            <link class="nav-link" to="/quem-sou">
              Quem sou
            </link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
