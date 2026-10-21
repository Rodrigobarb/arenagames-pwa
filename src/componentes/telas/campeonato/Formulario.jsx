import { useContext } from 'react'
import Alerta from '../../comuns/Alerta';
import CampeonatoContext from './CampeonatoContext';
import Col from 'react-bootstrap/Col';
import CampoEntrada from '../../comuns/CampoEntrada';
import CampoSelect from '../../comuns/CampoSelect';
import CampoEntradaTextArea from '../../comuns/CampoEntradaTextArea';
import Dialogo from '../../comuns/Dialogo';

function Formulario() {

    const { objeto, handleChange, acaoCadastrar, alerta, exibirForm, setExibirForm, listaJogos } = useContext(CampeonatoContext);

    return (
        <Dialogo id="modalEdicao" titulo="Campeonato"
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
                    id="txtNome" name="nome" label="Nome do campeonato"
                    tipo="text" onchange={handleChange}
                    msgvalido="OK certo" msginvalido="Informe o nome do campeonato"
                    requerido={true} readonly={false}
                    maxCaracteres={80} />
            </Col>
            <Col xs={12} md={6}>
                <CampoSelect value={objeto.jogo}
                    id="txtJogo" name="jogo" label="Jogo"
                    onchange={handleChange}
                    msgvalido="OK certo" msginvalido="Selecione o jogo"
                    requerido={true}>
                    {listaJogos.map((jogo) => (
                        <option key={jogo.id} value={jogo.id}>
                            {jogo.titulo}
                        </option>
                    ))}
                </CampoSelect>
            </Col>
            <Col xs={12} md={6}>
                <CampoSelect value={objeto.situacao}
                    id="txtSituacao" name="situacao" label="Situação"
                    onchange={handleChange}
                    msgvalido="OK certo" msginvalido="Selecione a situação"
                    requerido={true}>
                    <option value="Inscrições abertas">Inscrições abertas</option>
                    <option value="Em andamento">Em andamento</option>
                    <option value="Finalizado">Finalizado</option>
                </CampoSelect>
            </Col>
            <Col xs={12} md={12}>
                <CampoEntradaTextArea value={objeto.descricao}
                    id="txtDescricao" name="descricao" label="Descrição"
                    onchange={handleChange}
                    requerido={false} readonly={false} />
            </Col>
            <Col xs={12} md={6}>
                <CampoEntrada value={objeto.premiacao}
                    id="txtPremiacao" name="premiacao" label="Premiação (R$)"
                    tipo="number" onchange={handleChange} min={0}
                    msgvalido="OK certo" msginvalido="Informe o valor da premiação"
                    requerido={true} readonly={false} />
            </Col>
            <Col xs={12} md={6}>
                <CampoEntrada value={objeto.max_equipes}
                    id="txtMaxEquipes" name="max_equipes" label="Máximo de equipes"
                    tipo="number" onchange={handleChange} min={2}
                    msgvalido="OK certo" msginvalido="Informe o limite de equipes (mínimo 2)"
                    requerido={true} readonly={false} />
            </Col>
            <Col xs={12} md={6}>
                <CampoEntrada value={objeto.data_inicio}
                    id="txtDataInicio" name="data_inicio" label="Data de início"
                    tipo="date" onchange={handleChange}
                    msgvalido="OK certo" msginvalido="Informe a data de início"
                    requerido={true} readonly={false} />
            </Col>
            <Col xs={12} md={6}>
                <CampoEntrada value={objeto.data_fim}
                    id="txtDataFim" name="data_fim" label="Data de término"
                    tipo="date" onchange={handleChange}
                    requerido={false} readonly={false} />
            </Col>
        </Dialogo>
    )
}

export default Formulario;
