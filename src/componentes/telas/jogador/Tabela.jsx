import { useContext } from 'react'
import JogadorContext from './JogadorContext';
import Alerta from '../../comuns/Alerta';
import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';

function Tabela() {

    const { alerta, listaObjetos, remover, novoObjeto, editarObjeto } = useContext(JogadorContext);

    return (
        <div className="container py-4">
            <h1><i className="bi bi-person-badge"></i> Jogadores</h1>
            <p className="text-muted">Jogadores e a equipe de cada um</p>
            <Alerta alerta={alerta} />
            <Button variant="primary" className="mb-3" onClick={() => novoObjeto()}>
                Novo jogador <i className="bi bi-file-earmark-plus"></i>
            </Button>
            {listaObjetos.length === 0 && <h4 className="text-muted">Nenhum jogador encontrado</h4>}
            {listaObjetos.length > 0 && (
                <Table striped bordered hover responsive>
                    <thead>
                        <tr>
                            <th style={{ textAlign: 'center' }}>Ações</th>
                            <th>ID</th>
                            <th>Nickname</th>
                            <th>Nome</th>
                            <th>Função</th>
                            <th>Equipe</th>
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
                                <td>{objeto.nickname}</td>
                                <td>{objeto.nome}</td>
                                <td>{objeto.funcao}</td>
                                <td>{objeto.equipe_nome}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            )}
        </div>
    )
}

export default Tabela;
