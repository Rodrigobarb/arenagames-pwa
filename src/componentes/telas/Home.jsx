import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Card } from 'react-bootstrap';
import { getJogosAPI } from '../../servicos/JogoServico';
import { getEquipesAPI } from '../../servicos/EquipeServico';
import { getJogadoresAPI } from '../../servicos/JogadorServico';

function Home() {

    const [totalJogos, setTotalJogos] = useState(0);
    const [totalEquipes, setTotalEquipes] = useState(0);
    const [totalJogadores, setTotalJogadores] = useState(0);

    const recuperaTotais = async () => {
        const jogos = await getJogosAPI();
        const equipes = await getEquipesAPI();
        const jogadores = await getJogadoresAPI();
        setTotalJogos(jogos.length);
        setTotalEquipes(equipes.length);
        setTotalJogadores(jogadores.length);
    }

    useEffect(() => {
        recuperaTotais();
    }, []);

    return (
        <div className="container py-4">
            <h1>Arena Games</h1>
            <p className="text-muted">
                Sistema para cadastrar jogos, equipes e jogadores de e-sports.
            </p>
            <Row className="g-3">
                <Col xs={12} md={4}>
                    <Card className="text-center">
                        <Card.Body>
                            <Card.Title><i className="bi bi-joystick"></i> Jogos</Card.Title>
                            <h2>{totalJogos}</h2>
                            <Link to="/jogos">Ver jogos</Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} md={4}>
                    <Card className="text-center">
                        <Card.Body>
                            <Card.Title><i className="bi bi-people"></i> Equipes</Card.Title>
                            <h2>{totalEquipes}</h2>
                            <Link to="/equipes">Ver equipes</Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} md={4}>
                    <Card className="text-center">
                        <Card.Body>
                            <Card.Title><i className="bi bi-person-badge"></i> Jogadores</Card.Title>
                            <h2>{totalJogadores}</h2>
                            <Link to="/jogadores">Ver jogadores</Link>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    );
}

export default Home;
