import { useContext } from 'react'
import Alerta from '../../comuns/Alerta';
import EquipeContext from './EquipeContext';
import Col from 'react-bootstrap/Col';
import CampoEntrada from '../../comuns/CampoEntrada';
import CampoSelect from '../../comuns/CampoSelect';
import Dialogo from '../../comuns/Dialogo';

function Formulario() {

    const { objeto, handleChange, acaoCadastrar, alerta, exibirForm, setExibirForm, listaJogos } = useContext(EquipeContext);

    return (
        <Dialogo id="modalEdicao" titulo="Equipe"
            idform="formulario" acaoCadastrar={acaoCadastrar}
            exibirForm={exibirForm} setExibirForm={setExibirForm}>
            <Alerta alerta={alerta} />
            <Col xs={12} md={12}>
                <CampoEntrada value={objeto.nome}
                    id="txtNome" name="nome" label="Nome"
                    tipo="text" onchange={handleChange}
                    msgvalido="OK certo" msginvalido="Informe o nome da equipe"
                    requerido={true} readonly={false}
                    maxCaracteres={50} />
            </Col>
            <Col xs={12} md={4}>
                <CampoEntrada value={objeto.sigla}
                    id="txtSigla" name="sigla" label="Sigla"
                    tipo="text" onchange={handleChange}
                    msgvalido="OK certo" msginvalido="Informe a sigla"
                    requerido={true} readonly={false}
                    maxCaracteres={6} />
            </Col>
            <Col xs={12} md={8}>
                <CampoEntrada value={objeto.cidade}
                    id="txtCidade" name="cidade" label="Cidade"
                    tipo="text" onchange={handleChange}
                    requerido={false} readonly={false}
                    maxCaracteres={50} />
            </Col>
            <Col xs={12} md={12}>
                <CampoSelect value={objeto.jogo}
                    id="txtJogo" name="jogo" label="Jogo"
                    onchange={handleChange}
                    msgvalido="OK certo" msginvalido="Selecione o jogo"
                    requerido={true}>
                    {listaJogos.map((jogo) => (
                        <option key={jogo.id} value={jogo.id}>
                            {jogo.nome}
                        </option>
                    ))}
                </CampoSelect>
            </Col>
        </Dialogo>
    )
}

export default Formulario;
