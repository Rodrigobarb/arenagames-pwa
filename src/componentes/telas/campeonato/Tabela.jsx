import { useContext } from 'react'
import CampeonatoContext from './CampeonatoContext';
import Alerta from '../../comuns/Alerta';
import Table from 'react-bootstrap/Table';
import { Button, Badge } from 'react-bootstrap';
import { formatoMoeda, formatoData, corSituacao } from '../../comuns/Uteis';

function Tabela() {

    const { alerta, listaObjetos, remover, novoObjeto, editarObjeto } = useContext(CampeonatoContext);

    return (
        <div className="tela">
            <div className="cabecalho-tela">
                <div>
                    <h1><i className="bi bi-trophy"></i>Campeonatos</h1>
                    <p className="subtitulo">Torneios organizados pela Arena</p>
                </div>
                <Button className="btn-arena" onClick={() => novoObjeto()}>
                    Novo campeonato <i className="bi bi-plus-circle"></i>
                </Button>
            </div>
            <Alerta alerta={alerta} />
            {listaObjetos.length === 0 && <h4 className="subtitulo">Nenhum campeonato encontrado</h4>}
            {listaObjetos.length > 0 && (
                <div className="card-arena">
                    <Table hover responsive>
                        <thead>
                            <tr>
                                <th style={{ textAlign: 'center' }}>Ações</th>
                                <th>ID</th>
                                <th>Nome</th>
                                <th>Jogo</th>
                                <th>Premiação</th>
                                <th>Início</th>
                                <th>Fim</th>
                                <th>Equipes</th>
                                <th>Situação</th>
                            </tr>
                        </thead>
                        <tbody>
                            {listaObjetos.map((objeto) => (
                                <tr key={objeto.id}>
                                    <td align="center" style={{ whiteSpace: 'nowrap' }}>
                                        <Button variant="outline-info" className="btn-acao" title="Editar" onClick={() => editarObjeto(objeto.id)}>
                                            <i className="bi bi-pencil-square"></i>
                                        </Button>
                                        <Button variant="outline-danger" className="btn-acao" title="Remover" onClick={() => { remover(objeto.id); }}>
                                            <i className="bi bi-trash"></i>
                                        </Button>
                                    </td>
                                    <td>{objeto.id}</td>
                                    <td><strong>{objeto.nome}</strong></td>
                                    <td>{objeto.jogo_titulo}</td>
                                    <td>{formatoMoeda(objeto.premiacao)}</td>
                                    <td>{formatoData(objeto.data_inicio)}</td>
                                    <td>{formatoData(objeto.data_fim)}</td>
                                    <td>{objeto.total_inscritos}/{objeto.max_equipes}</td>
                                    <td><Badge bg={corSituacao(objeto.situacao)}>{objeto.situacao}</Badge></td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
            )}
        </div>
    )
}

export default Tabela;
