import { useContext } from 'react'
import Alerta from '../../comuns/Alerta';
import JogoContext from './JogoContext';
import Col from 'react-bootstrap/Col';
import CampoEntrada from '../../comuns/CampoEntrada';
import Dialogo from '../../comuns/Dialogo';

function Formulario() {

    const { objeto, handleChange, acaoCadastrar, alerta, exibirForm, setExibirForm } = useContext(JogoContext);

    return (
        <Dialogo id="modalEdicao" titulo="Jogo"
            idform="formulario" acaoCadastrar={acaoCadastrar}
            exibirForm={exibirForm} setExibirForm={setExibirForm}>
            <Alerta alerta={alerta} />
            <Col xs={12} md={3}>
                <CampoEntrada value={objeto.id}
                    id="txtId" name="id" label="ID"
                    tipo="number" onchange={handleChange}
                    readonly={true} />
            </Col>
            <Col xs={12} md={9}>
                <CampoEntrada value={objeto.titulo}
                    id="txtTitulo" name="titulo" label="Título"
                    tipo="text" onchange={handleChange}
                    msgvalido="OK certo" msginvalido="Informe o título do jogo"
                    requerido={true} readonly={false}
                    maxCaracteres={60} />
            </Col>
            <Col xs={12} md={6}>
                <CampoEntrada value={objeto.genero}
                    id="txtGenero" name="genero" label="Gênero"
                    tipo="text" onchange={handleChange}
                    msgvalido="OK certo" msginvalido="Informe o gênero (ex: MOBA, FPS)"
                    requerido={true} readonly={false}
                    maxCaracteres={40} />
            </Col>
            <Col xs={12} md={6}>
                <CampoEntrada value={objeto.desenvolvedora}
                    id="txtDesenvolvedora" name="desenvolvedora" label="Desenvolvedora"
                    tipo="text" onchange={handleChange}
                    requerido={false} readonly={false}
                    maxCaracteres={60} />
            </Col>
            <Col xs={12} md={6}>
                <CampoEntrada value={objeto.jogadores_por_time}
                    id="txtJogadores" name="jogadores_por_time" label="Jogadores por time"
                    tipo="number" onchange={handleChange} min={1}
                    msgvalido="OK certo" msginvalido="Informe quantos jogadores tem cada time"
                    requerido={true} readonly={false} />
            </Col>
        </Dialogo>
    )
}

export default Formulario;
