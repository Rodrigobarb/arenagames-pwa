import { useContext } from 'react'
import Alerta from '../../comuns/Alerta';
import EquipeContext from './EquipeContext';
import Col from 'react-bootstrap/Col';
import CampoEntrada from '../../comuns/CampoEntrada';
import CampoSelect from '../../comuns/CampoSelect';
import Dialogo from '../../comuns/Dialogo';

function Formulario() {

    const { objeto, handleChange, acaoCadastrar, alerta, exibirForm, setExibirForm } = useContext(EquipeContext);

    return (
        <Dialogo id="modalEdicao" titulo="Equipe"
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
                <CampoEntrada value={objeto.nome}
                    id="txtNome" name="nome" label="Nome da equipe"
                    tipo="text" onchange={handleChange}
                    msgvalido="OK certo" msginvalido="Informe o nome da equipe"
                    requerido={true} readonly={false}
                    maxCaracteres={60} />
            </Col>
            <Col xs={12} md={4}>
                <CampoEntrada value={objeto.sigla}
                    id="txtSigla" name="sigla" label="Sigla (tag)"
                    tipo="text" onchange={handleChange}
                    msgvalido="OK certo" msginvalido="Informe a sigla (até 6 letras)"
                    requerido={true} readonly={false}
                    maxCaracteres={6} />
            </Col>
            <Col xs={12} md={8}>
                <CampoEntrada value={objeto.cidade}
                    id="txtCidade" name="cidade" label="Cidade"
                    tipo="text" onchange={handleChange}
                    requerido={false} readonly={false}
                    maxCaracteres={60} />
            </Col>
            <Col xs={12} md={6}>
                <CampoEntrada value={objeto.data_fundacao}
                    id="txtDataFundacao" name="data_fundacao" label="Data de fundação"
                    tipo="date" onchange={handleChange}
                    requerido={false} readonly={false} />
            </Col>
            <Col xs={12} md={6}>
                <CampoSelect value={objeto.ativa}
                    id="txtAtiva" name="ativa" label="Situação"
                    onchange={handleChange}
                    msgvalido="OK certo" msginvalido="Informe se a equipe está ativa"
                    requerido={true}>
                    <option value={true}>Ativa</option>
                    <option value={false}>Inativa</option>
                </CampoSelect>
            </Col>
        </Dialogo>
    )
}

export default Formulario;
