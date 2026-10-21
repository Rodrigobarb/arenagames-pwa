import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink, Outlet } from 'react-router-dom';

function Menu() {
    return (
        <div>
            <Navbar expand="lg" className="navbar-arena" sticky="top" collapseOnSelect>
                <Container>
                    <NavLink className="navbar-brand" to="/">
                        <i className="bi bi-controller"></i> Arena Games
                    </NavLink>
                    <Navbar.Toggle aria-controls="menu-principal" />
                    <Navbar.Collapse id="menu-principal">
                        <Nav className="me-auto">
                            <Nav.Link as={NavLink} eventKey="home" to="/" end>
                                <i className="bi bi-house"></i> Home
                            </Nav.Link>
                            <Nav.Link as={NavLink} eventKey="jogos" to="jogos">
                                <i className="bi bi-joystick"></i> Jogos
                            </Nav.Link>
                            <Nav.Link as={NavLink} eventKey="equipes" to="equipes">
                                <i className="bi bi-people"></i> Equipes
                            </Nav.Link>
                            <Nav.Link as={NavLink} eventKey="campeonatos" to="campeonatos">
                                <i className="bi bi-trophy"></i> Campeonatos
                            </Nav.Link>
                            <Nav.Link as={NavLink} eventKey="inscricoes" to="inscricoes">
                                <i className="bi bi-card-checklist"></i> Inscrições
                            </Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link as={NavLink} eventKey="sobre" to="sobre">
                                <i className="bi bi-info-circle"></i> Sobre
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Outlet />
        </div>
    );
}

export default Menu;
