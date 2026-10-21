import { useContext } from 'react'
import Alerta from '../../comuns/Alerta';
import JogadorContext from './JogadorContext';
import Col from 'react-bootstrap/Col';
import CampoEntrada from '../../comuns/CampoEntrada';
import CampoSelect from '../../comuns/CampoSelect';
import Dialogo from '../../comuns/Dialogo';

function Formulario() {

    const { objeto, handleChange, acaoCadastrar, alerta, exibirForm, setExibirForm, listaEquipes } = useContext(JogadorContext);

    return (
        <Dialogo id="modalEdicao" titulo="Jogador"
            idform="formulario" acaoCadastrar={acaoCadastrar}
            exibirForm={exibirForm} setExibirForm={setExibirForm}>
            <Alerta alerta={alerta} />
            <Col xs={12} md={12}>
                <CampoEntrada value={objeto.nickname}
                    id="txtNickname" name="nickname" label="Nickname"
                    tipo="text" onchange={handleChange}
                    msgvalido="OK certo" msginvalido="Informe o nickname"
                    requerido={true} readonly={false}
                    maxCaracteres={30} />
            </Col>
            <Col xs={12} md={12}>
                <CampoEntrada value={objeto.nome}
                    id="txtNome" name="nome" label="Nome"
                    tipo="text" onchange={handleChange}
                    msgvalido="OK certo" msginvalido="Informe o nome do jogador"
                    requerido={true} readonly={false}
                    maxCaracteres={50} />
            </Col>
            <Col xs={12} md={6}>
                <CampoEntrada value={objeto.funcao}
                    id="txtFuncao" name="funcao" label="Função"
                    tipo="text" onchange={handleChange}
                    requerido={false} readonly={false}
                    maxCaracteres={30} />
            </Col>
            <Col xs={12} md={6}>
                <CampoSelect value={objeto.equipe}
                    id="txtEquipe" name="equipe" label="Equipe"
                    onchange={handleChange}
                    msgvalido="OK certo" msginvalido="Selecione a equipe"
                    requerido={true}>
                    {listaEquipes.map((equipe) => (
                        <option key={equipe.id} value={equipe.id}>
                            {equipe.nome}
                        </option>
                    ))}
                </CampoSelect>
            </Col>
        </Dialogo>
    )
}

export default Formulario;
