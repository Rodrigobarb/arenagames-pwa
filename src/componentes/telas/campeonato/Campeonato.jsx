import { useState, useEffect } from 'react';
import CampeonatoContext from './CampeonatoContext';
import { getCampeonatosAPI, getCampeonatoPorIdAPI, deleteCampeonatoPorIdAPI, cadastraCampeonatoAPI } from '../../../servicos/CampeonatoServico';
import Tabela from './Tabela';
import Formulario from './Formulario';
import Carregando from '../../comuns/Carregando';
import { getJogosAPI } from '../../../servicos/JogoServico';

function Campeonato() {

    const [alerta, setAlerta] = useState({ status: "", message: "" });
    const [listaObjetos, setListaObjetos] = useState([]);
    const [carregando, setCarregando] = useState(true);
    const [editar, setEditar] = useState(false);
    const [exibirForm, setExibirForm] = useState(false);

    const objetoVazio = {
        id: 0,
        nome: "",
        descricao: "",
        premiacao: "",
        data_inicio: new Date().toISOString().slice(0, 10),
        data_fim: "",
        situacao: "Inscrições abertas",
        max_equipes: 8,
        jogo: ""
    };
    const [objeto, setObjeto] = useState(objetoVazio);

    const recuperaCampeonatos = async () => {
        setCarregando(true);
        const lista = await getCampeonatosAPI();
        setListaObjetos(Array.isArray(lista) ? lista : []);
        setCarregando(false);
    }

    const remover = async id => {
        if (window.confirm('Deseja remover este campeonato?')) {
            let retornoAPI = await deleteCampeonatoPorIdAPI(id);
            setAlerta({ status: retornoAPI.status, message: retornoAPI.message });
            recuperaCampeonatos();
        }
    }

    // lista de jogos para o select da chave estrangeira
    const [listaJogos, setListaJogos] = useState([]);

    const recuperaJogos = async () => {
        const lista = await getJogosAPI();
        setListaJogos(Array.isArray(lista) ? lista : []);
    }

    useEffect(() => {
        recuperaCampeonatos();
        recuperaJogos();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const novoObjeto = () => {
        setEditar(false);
        setAlerta({ status: "", message: "" });
        setObjeto(objetoVazio);
        setExibirForm(true);
    }

    const editarObjeto = async id => {
        setObjeto(await getCampeonatoPorIdAPI(id));
        setEditar(true);
        setAlerta({ status: "", message: "" });
        setExibirForm(true);
    }

    const acaoCadastrar = async e => {
        e.preventDefault();
        const metodo = editar ? "PUT" : "POST";
        try {
            let retornoAPI = await cadastraCampeonatoAPI(objeto, metodo);
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
        recuperaCampeonatos();
    }

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setObjeto({ ...objeto, [name]: value });
    }

    return (
        <CampeonatoContext.Provider value={
            {
                listaObjetos, alerta, remover, objeto, editarObjeto,
                acaoCadastrar, handleChange, novoObjeto, exibirForm, setExibirForm, listaJogos
            }
        }>
            <Carregando carregando={carregando}>
                <Tabela />
            </Carregando>
            <Formulario />
        </CampeonatoContext.Provider>
    );
}

export default Campeonato;
