import { useState, useEffect } from 'react';
import InscricaoContext from './InscricaoContext';
import { getInscricoesAPI, getInscricaoPorIdAPI, deleteInscricaoPorIdAPI, cadastraInscricaoAPI } from '../../../servicos/InscricaoServico';
import Tabela from './Tabela';
import Formulario from './Formulario';
import Carregando from '../../comuns/Carregando';
import { getCampeonatosAPI } from '../../../servicos/CampeonatoServico';
import { getEquipesAPI } from '../../../servicos/EquipeServico';

function Inscricao() {

    const [alerta, setAlerta] = useState({ status: "", message: "" });
    const [listaObjetos, setListaObjetos] = useState([]);
    const [carregando, setCarregando] = useState(true);
    const [editar, setEditar] = useState(false);
    const [exibirForm, setExibirForm] = useState(false);

    const objetoVazio = {
        id: 0,
        campeonato: "",
        equipe: "",
        data_inscricao: new Date().toISOString().slice(0, 10),
        pontos: 0,
        colocacao: ""
    };
    const [objeto, setObjeto] = useState(objetoVazio);

    const recuperaInscricoes = async () => {
        setCarregando(true);
        const lista = await getInscricoesAPI();
        setListaObjetos(Array.isArray(lista) ? lista : []);
        setCarregando(false);
    }

    const remover = async id => {
        if (window.confirm('Deseja remover esta inscrição?')) {
            let retornoAPI = await deleteInscricaoPorIdAPI(id);
            setAlerta({ status: retornoAPI.status, message: retornoAPI.message });
            recuperaInscricoes();
        }
    }

    // listas para os selects das chaves estrangeiras
    const [listaCampeonatos, setListaCampeonatos] = useState([]);
    const [listaEquipes, setListaEquipes] = useState([]);

    const recuperaListas = async () => {
        const campeonatos = await getCampeonatosAPI();
        setListaCampeonatos(Array.isArray(campeonatos) ? campeonatos : []);
        const equipes = await getEquipesAPI();
        setListaEquipes(Array.isArray(equipes) ? equipes : []);
    }

    useEffect(() => {
        recuperaInscricoes();
        recuperaListas();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const novoObjeto = () => {
        setEditar(false);
        setAlerta({ status: "", message: "" });
        setObjeto(objetoVazio);
        setExibirForm(true);
    }

    const editarObjeto = async id => {
        setObjeto(await getInscricaoPorIdAPI(id));
        setEditar(true);
        setAlerta({ status: "", message: "" });
        setExibirForm(true);
    }

    const acaoCadastrar = async e => {
        e.preventDefault();
        const metodo = editar ? "PUT" : "POST";
        try {
            let retornoAPI = await cadastraInscricaoAPI(objeto, metodo);
            setAlerta({ status: retornoAPI.status, message: retornoAPI.message });
            if (retornoAPI.status === "success") {
                setObjeto(retornoAPI.objeto);
                if (!editar) {
                    setEditar(true);
                }
            }
        } catch (err) {
            console.error(err.message);
        }
        recuperaInscricoes();
    }

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setObjeto({ ...objeto, [name]: value });
    }

    return (
        <InscricaoContext.Provider value={
            {
                listaObjetos, alerta, remover, objeto, editarObjeto,
                acaoCadastrar, handleChange, novoObjeto, exibirForm, setExibirForm, listaCampeonatos, listaEquipes
            }
        }>
            <Carregando carregando={carregando}>
                <Tabela />
            </Carregando>
            <Formulario />
        </InscricaoContext.Provider>
    );
}

export default Inscricao;
