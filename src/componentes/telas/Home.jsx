import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Badge } from 'react-bootstrap';
import { getJogosAPI } from '../../servicos/JogoServico';
import { getEquipesAPI } from '../../servicos/EquipeServico';
import { getCampeonatosAPI } from '../../servicos/CampeonatoServico';
import { getInscricoesAPI } from '../../servicos/InscricaoServico';
import Carregando from '../comuns/Carregando';
import { formatoMoeda, formatoData, corSituacao } from '../comuns/Uteis';

function Home() {

    const [carregando, setCarregando] = useState(true);
    const [totais, setTotais] = useState({ jogos: 0, equipes: 0, campeonatos: 0, inscricoes: 0 });
    const [campeonatos, setCampeonatos] = useState([]);

    const tamanho = (lista) => (Array.isArray(lista) ? lista.length : 0);

    const recuperaDados = async () => {
        setCarregando(true);
        try {
            const [jogos, equipes, camps, inscricoes] = await Promise.all([
                getJogosAPI(), getEquipesAPI(), getCampeonatosAPI(), getInscricoesAPI()
            ]);
            setTotais({
                jogos: tamanho(jogos), equipes: tamanho(equipes),
                campeonatos: tamanho(camps), inscricoes: tamanho(inscricoes)
            });
            setCampeonatos(Array.isArray(camps) ? camps : []);
        } catch (err) {
            console.error(err);
        }
        setCarregando(false);
    }

    useEffect(() => {
        recuperaDados();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const cards = [
        { titulo: 'Jogos', valor: totais.jogos, icone: 'bi-joystick', rota: '/jogos' },
        { titulo: 'Equipes', valor: totais.equipes, icone: 'bi-people', rota: '/equipes' },
        { titulo: 'Campeonatos', valor: totais.campeonatos, icone: 'bi-trophy', rota: '/campeonatos' },
        { titulo: 'Inscrições', valor: totais.inscricoes, icone: 'bi-card-checklist', rota: '/inscricoes' },
    ];

    return (
        <div className="tela">
            <div className="hero">
                <h1>Arena Games</h1>
                <p className="mb-0 subtitulo" style={{ fontSize: '1.1rem' }}>
                    Gerenciamento de campeonatos de e-sports: League of Legends, CS2, Valorant, Rocket League e muito mais.
                </p>
            </div>

            <Carregando carregando={carregando}>
                <Row className="g-3 mb-4">
                    {cards.map((card) => (
                        <Col xs={6} md={3} key={card.titulo}>
                            <Link to={card.rota} className="card-numero">
                                <i className={'bi ' + card.icone}></i>
                                <div className="numero mt-2">{card.valor}</div>
                                <div className="subtitulo">{card.titulo}</div>
                            </Link>
                        </Col>
                    ))}
                </Row>

                <h3 className="mb-3"><i className="bi bi-lightning-charge" style={{ color: 'var(--ag-ciano)' }}></i> Campeonatos</h3>
                {campeonatos.length === 0 && <p className="subtitulo">Nenhum campeonato cadastrado ainda.</p>}
                <Row className="g-3">
                    {campeonatos.map((camp) => (
                        <Col xs={12} md={6} lg={4} key={camp.id}>
                            <div className="campeonato-item">
                                <div className="d-flex justify-content-between align-items-start gap-2">
                                    <h5 className="mb-1">{camp.nome}</h5>
                                    <Badge bg={corSituacao(camp.situacao)}>{camp.situacao}</Badge>
                                </div>
                                <div className="subtitulo mb-2"><i className="bi bi-joystick"></i> {camp.jogo_titulo}</div>
                                <div className="d-flex justify-content-between small">
                                    <span><i className="bi bi-calendar-event"></i> {formatoData(camp.data_inicio)}</span>
                                    <span><i className="bi bi-people"></i> {camp.total_inscritos}/{camp.max_equipes}</span>
                                    <span><i className="bi bi-cash-coin"></i> {formatoMoeda(camp.premiacao)}</span>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Carregando>
        </div>
    );
}

export default Home;
