import { useContext } from 'react'
import JogoContext from './JogoContext';
import Alerta from '../../comuns/Alerta';
import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';

function Tabela() {

    const { alerta, listaObjetos, remover, novoObjeto, editarObjeto } = useContext(JogoContext);

    return (
        <div className="container py-4">
            <h1><i className="bi bi-joystick"></i> Jogos</h1>
            <p className="text-muted">Jogos que as equipes disputam</p>
            <Alerta alerta={alerta} />
            <Button variant="primary" className="mb-3" onClick={() => novoObjeto()}>
                Novo jogo <i className="bi bi-file-earmark-plus"></i>
            </Button>
            {listaObjetos.length === 0 && <h4 className="text-muted">Nenhum jogo encontrado</h4>}
            {listaObjetos.length > 0 && (
                <Table striped bordered hover responsive>
                    <thead>
                        <tr>
                            <th style={{ textAlign: 'center' }}>Ações</th>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>Gênero</th>
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
                                <td>{objeto.genero}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            )}
        </div>
    )
}

export default Tabela;
