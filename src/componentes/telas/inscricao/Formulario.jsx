import { useContext } from 'react'
import Alerta from '../../comuns/Alerta';
import InscricaoContext from './InscricaoContext';
import Col from 'react-bootstrap/Col';
import CampoEntrada from '../../comuns/CampoEntrada';
import CampoSelect from '../../comuns/CampoSelect';
import Dialogo from '../../comuns/Dialogo';

function Formulario() {

    const { objeto, handleChange, acaoCadastrar, alerta, exibirForm, setExibirForm,
        listaCampeonatos, listaEquipes } = useContext(InscricaoContext);

    return (
        <Dialogo id="modalEdicao" titulo="Inscrição"
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
                <CampoSelect value={objeto.campeonato}
                    id="txtCampeonato" name="campeonato" label="Campeonato"
                    onchange={handleChange}
                    msgvalido="OK certo" msginvalido="Selecione o campeonato"
                    requerido={true}>
                    {listaCampeonatos.map((camp) => (
                        <option key={camp.id} value={camp.id}>
                            {camp.nome} ({camp.jogo_titulo})
                        </option>
                    ))}
                </CampoSelect>
            </Col>
            <Col xs={12} md={12}>
                <CampoSelect value={objeto.equipe}
                    id="txtEquipe" name="equipe" label="Equipe"
                    onchange={handleChange}
                    msgvalido="OK certo" msginvalido="Selecione a equipe"
                    requerido={true}>
                    {listaEquipes.map((equipe) => (
                        <option key={equipe.id} value={equipe.id}>
                            [{equipe.sigla}] {equipe.nome}
                        </option>
                    ))}
                </CampoSelect>
            </Col>
            <Col xs={12} md={4}>
                <CampoEntrada value={objeto.data_inscricao}
                    id="txtDataInscricao" name="data_inscricao" label="Data da inscrição"
                    tipo="date" onchange={handleChange}
                    msgvalido="OK certo" msginvalido="Informe a data da inscrição"
                    requerido={true} readonly={false} />
            </Col>
            <Col xs={12} md={4}>
                <CampoEntrada value={objeto.pontos}
                    id="txtPontos" name="pontos" label="Pontos"
                    tipo="number" onchange={handleChange} min={0}
                    requerido={false} readonly={false} />
            </Col>
            <Col xs={12} md={4}>
                <CampoEntrada value={objeto.colocacao}
                    id="txtColocacao" name="colocacao" label="Colocação final"
                    tipo="number" onchange={handleChange} min={1}
                    requerido={false} readonly={false} />
            </Col>
        </Dialogo>
    )
}

export default Formulario;
