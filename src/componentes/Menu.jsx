import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink, Outlet } from 'react-router-dom';

// Logo do IFSul (imagem do site oficial do campus)
const logoIfsul = 'https://passofundo.ifsul.edu.br/templates/padraogoverno01/img/img_logo_ifsul.png';

function Menu() {
    return (
        <div>
            <Navbar expand="lg" variant="dark" className="menu-ifsul">
                <Container>
                    <NavLink className="navbar-brand d-flex align-items-center gap-2" to="/">
                        <img src={logoIfsul} alt="IFSul" height="40" />
                        <span className="d-none d-sm-inline">| Arena Games</span>
                    </NavLink>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <NavLink className="nav-link" to="/" end>Home</NavLink>
                            <NavDropdown title="Manutenções" id="basic-nav-dropdown">
                                <NavLink className="dropdown-item" to="jogos">Jogos</NavLink>
                                <NavLink className="dropdown-item" to="equipes">Equipes</NavLink>
                                <NavLink className="dropdown-item" to="jogadores">Jogadores</NavLink>
                            </NavDropdown>
                            <NavLink className="nav-link" to="sobre">Sobre...</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Outlet />
            <footer className="text-center text-muted small py-3">
                Arena Games - Trabalho de Programação para Web - IFSul Câmpus Passo Fundo
            </footer>
        </div>
    );
}

export default Menu;
