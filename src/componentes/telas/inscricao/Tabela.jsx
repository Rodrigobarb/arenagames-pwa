import { useContext } from 'react'
import InscricaoContext from './InscricaoContext';
import Alerta from '../../comuns/Alerta';
import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';
import { formatoData, medalha } from '../../comuns/Uteis';

function Tabela() {

    const { alerta, listaObjetos, remover, novoObjeto, editarObjeto } = useContext(InscricaoContext);

    return (
        <div className="tela">
            <div className="cabecalho-tela">
                <div>
                    <h1><i className="bi bi-card-checklist"></i>Inscrições</h1>
                    <p className="subtitulo">Equipes inscritas em cada campeonato, com pontos e colocação</p>
                </div>
                <Button className="btn-arena" onClick={() => novoObjeto()}>
                    Nova inscrição <i className="bi bi-plus-circle"></i>
                </Button>
            </div>
            <Alerta alerta={alerta} />
            {listaObjetos.length === 0 && <h4 className="subtitulo">Nenhuma inscrição encontrada</h4>}
            {listaObjetos.length > 0 && (
                <div className="card-arena">
                    <Table hover responsive>
                        <thead>
                            <tr>
                                <th style={{ textAlign: 'center' }}>Ações</th>
                                <th>ID</th>
                                <th>Campeonato</th>
                                <th>Equipe</th>
                                <th>Data</th>
                                <th>Pontos</th>
                                <th>Colocação</th>
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
                                    <td>{objeto.campeonato_nome}</td>
                                    <td><span className="sigla">{objeto.equipe_sigla}</span> {objeto.equipe_nome}</td>
                                    <td>{formatoData(objeto.data_inscricao)}</td>
                                    <td><strong>{objeto.pontos}</strong></td>
                                    <td>{medalha(objeto.colocacao)}</td>
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
