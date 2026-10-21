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
            <Col xs={12} md={12}>
                <CampoEntrada value={objeto.nome}
                    id="txtNome" name="nome" label="Nome"
                    tipo="text" onchange={handleChange}
                    msgvalido="OK certo" msginvalido="Informe o nome do jogo"
                    requerido={true} readonly={false}
                    maxCaracteres={50} />
            </Col>
            <Col xs={12} md={12}>
                <CampoEntrada value={objeto.genero}
                    id="txtGenero" name="genero" label="Gênero"
                    tipo="text" onchange={handleChange}
                    msgvalido="OK certo" msginvalido="Informe o gênero (ex: MOBA, FPS)"
                    requerido={true} readonly={false}
                    maxCaracteres={40} />
            </Col>
        </Dialogo>
    )
}

export default Formulario;
