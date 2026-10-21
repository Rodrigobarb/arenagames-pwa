import { useContext } from 'react'
import InscricaoContext from './InscricaoContext';
import Alerta from '../../comuns/Alerta';
import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';
import { formatoData, formataColocacao } from '../../comuns/Uteis';

function Tabela() {

    const { alerta, listaObjetos, remover, novoObjeto, editarObjeto } = useContext(InscricaoContext);

    return (
        <div className="container py-4">
            <div className="d-flex justify-content-between align-items-center flex-wrap gap-2 mb-3">
                <div>
                    <h1><i className="bi bi-card-checklist"></i> Inscrições</h1>
                    <p className="text-muted mb-0">Equipes inscritas em cada campeonato, com pontos e colocação</p>
                </div>
                <Button variant="primary" onClick={() => novoObjeto()}>
                    Nova inscrição <i className="bi bi-plus-circle"></i>
                </Button>
            </div>
            <Alerta alerta={alerta} />
            {listaObjetos.length === 0 && <h4 className="text-muted">Nenhuma inscrição encontrada</h4>}
            {listaObjetos.length > 0 && (
                <div>
                    <Table striped bordered hover responsive>
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
                                        <Button variant="info" size="sm" className="me-1" title="Editar" onClick={() => editarObjeto(objeto.id)}>
                                            <i className="bi bi-pencil-square"></i>
                                        </Button>
                                        <Button variant="danger" size="sm" title="Remover" onClick={() => { remover(objeto.id); }}>
                                            <i className="bi bi-trash"></i>
                                        </Button>
                                    </td>
                                    <td>{objeto.id}</td>
                                    <td>{objeto.campeonato_nome}</td>
                                    <td><span className="badge bg-secondary">{objeto.equipe_sigla}</span> {objeto.equipe_nome}</td>
                                    <td>{formatoData(objeto.data_inscricao)}</td>
                                    <td><strong>{objeto.pontos}</strong></td>
                                    <td>{formataColocacao(objeto.colocacao)}</td>
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
