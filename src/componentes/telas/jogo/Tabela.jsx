import { useContext } from 'react'
import JogoContext from './JogoContext';
import Alerta from '../../comuns/Alerta';
import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';

function Tabela() {

    const { alerta, listaObjetos, remover, novoObjeto, editarObjeto } = useContext(JogoContext);

    return (
        <div className="tela">
            <div className="cabecalho-tela">
                <div>
                    <h1><i className="bi bi-joystick"></i>Jogos</h1>
                    <p className="subtitulo">Modalidades disputadas nos campeonatos</p>
                </div>
                <Button className="btn-arena" onClick={() => novoObjeto()}>
                    Novo jogo <i className="bi bi-plus-circle"></i>
                </Button>
            </div>
            <Alerta alerta={alerta} />
            {listaObjetos.length === 0 && <h4 className="subtitulo">Nenhum jogo encontrado</h4>}
            {listaObjetos.length > 0 && (
                <div className="card-arena">
                    <Table hover responsive>
                        <thead>
                            <tr>
                                <th style={{ textAlign: 'center' }}>Ações</th>
                                <th>ID</th>
                                <th>Título</th>
                                <th>Gênero</th>
                                <th>Desenvolvedora</th>
                                <th>Jogadores por time</th>
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
                                    <td><strong>{objeto.titulo}</strong></td>
                                    <td>{objeto.genero}</td>
                                    <td>{objeto.desenvolvedora}</td>
                                    <td>{objeto.jogadores_por_time}</td>
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
