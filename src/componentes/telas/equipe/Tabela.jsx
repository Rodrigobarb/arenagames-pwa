import { useContext } from 'react'
import EquipeContext from './EquipeContext';
import Alerta from '../../comuns/Alerta';
import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';

function Tabela() {

    const { alerta, listaObjetos, remover, novoObjeto, editarObjeto } = useContext(EquipeContext);

    return (
        <div className="container py-4">
            <h1><i className="bi bi-people"></i> Equipes</h1>
            <p className="text-muted">Equipes cadastradas e o jogo de cada uma</p>
            <Alerta alerta={alerta} />
            <Button variant="primary" className="mb-3" onClick={() => novoObjeto()}>
                Nova equipe <i className="bi bi-file-earmark-plus"></i>
            </Button>
            {listaObjetos.length === 0 && <h4 className="text-muted">Nenhuma equipe encontrada</h4>}
            {listaObjetos.length > 0 && (
                <Table striped bordered hover responsive>
                    <thead>
                        <tr>
                            <th style={{ textAlign: 'center' }}>Ações</th>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>Sigla</th>
                            <th>Cidade</th>
                            <th>Jogo</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listaObjetos.map((objeto) => (
                            <tr key={objeto.id}>
                                <td align="center">
                                    <Button variant="info" size="sm" className="me-1" onClick={() => editarObjeto(objeto.id)}>
                                        <i className="bi bi-pencil-square"></i>
                                    </Button>
                                    <Button variant="danger" size="sm" onClick={() => { remover(objeto.id); }}>
                                        <i className="bi bi-trash"></i>
                                    </Button>
                                </td>
                                <td>{objeto.id}</td>
                                <td>{objeto.nome}</td>
                                <td>{objeto.sigla}</td>
                                <td>{objeto.cidade}</td>
                                <td>{objeto.jogo_nome}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            )}
        </div>
    )
}

export default Tabela;
