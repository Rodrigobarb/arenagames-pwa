import { useContext } from 'react'
import EquipeContext from './EquipeContext';
import Alerta from '../../comuns/Alerta';
import Table from 'react-bootstrap/Table';
import { Button, Badge } from 'react-bootstrap';
import { formatoData } from '../../comuns/Uteis';

function Tabela() {

    const { alerta, listaObjetos, remover, novoObjeto, editarObjeto } = useContext(EquipeContext);

    return (
        <div className="tela">
            <div className="cabecalho-tela">
                <div>
                    <h1><i className="bi bi-people"></i>Equipes</h1>
                    <p className="subtitulo">Times cadastrados na Arena</p>
                </div>
                <Button className="btn-arena" onClick={() => novoObjeto()}>
                    Nova equipe <i className="bi bi-plus-circle"></i>
                </Button>
            </div>
            <Alerta alerta={alerta} />
            {listaObjetos.length === 0 && <h4 className="subtitulo">Nenhuma equipe encontrada</h4>}
            {listaObjetos.length > 0 && (
                <div className="card-arena">
                    <Table hover responsive>
                        <thead>
                            <tr>
                                <th style={{ textAlign: 'center' }}>Ações</th>
                                <th>ID</th>
                                <th>Sigla</th>
                                <th>Nome</th>
                                <th>Cidade</th>
                                <th>Fundação</th>
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
                                    <td><span className="sigla">{objeto.sigla}</span></td>
                                    <td><strong>{objeto.nome}</strong></td>
                                    <td>{objeto.cidade || '-'}</td>
                                    <td>{formatoData(objeto.data_fundacao)}</td>
                                    <td>
                                        <Badge bg={objeto.ativa ? 'success' : 'secondary'}>
                                            {objeto.ativa ? 'Ativa' : 'Inativa'}
                                        </Badge>
                                    </td>
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
