import { useState, useEffect } from 'react';
import JogadorContext from './JogadorContext';
import { getJogadoresAPI, getJogadorPorIdAPI, deleteJogadorPorIdAPI, cadastraJogadorAPI } from '../../../servicos/JogadorServico';
import Tabela from './Tabela';
import Formulario from './Formulario';
import Carregando from '../../comuns/Carregando';
import { getEquipesAPI } from '../../../servicos/EquipeServico';


function Jogador() {

    const [alerta, setAlerta] = useState({ status: "", message: "" });
    const [listaObjetos, setListaObjetos] = useState([]);
    const [carregando, setCarregando] = useState(true);
    const [editar, setEditar] = useState(false);
    const [exibirForm, setExibirForm] = useState(false);

    const objetoVazio = {
        id: 0,
        nickname: "",
        nome: "",
        funcao: "",
        equipe: ""
    };
    const [objeto, setObjeto] = useState(objetoVazio);

    const recuperaJogadores = async () => {
        setCarregando(true);
        const lista = await getJogadoresAPI();
        setListaObjetos(Array.isArray(lista) ? lista : []);
        setCarregando(false);
    }

    const remover = async id => {
        if (window.confirm('Deseja remover este jogador?')) {
            let retornoAPI = await deleteJogadorPorIdAPI(id);
            setAlerta({ status: retornoAPI.status, message: retornoAPI.message });
            // se a API não deixou remover, mostra um alerta na tela
            if (retornoAPI.status === 'error') {
                window.alert(retornoAPI.message);
            }
            recuperaJogadores();
        }
    }

    // lista de equipes para o select da chave estrangeira
    const [listaEquipes, setListaEquipes] = useState([]);

    const recuperaEquipes = async () => {
        const lista = await getEquipesAPI();
        setListaEquipes(Array.isArray(lista) ? lista : []);
    }

    useEffect(() => {
        recuperaJogadores();
        recuperaEquipes();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const novoObjeto = () => {
        setEditar(false);
        setAlerta({ status: "", message: "" });
        setObjeto(objetoVazio);
        setExibirForm(true);
    }

    const editarObjeto = async id => {
        setObjeto(await getJogadorPorIdAPI(id));
        setEditar(true);
        setAlerta({ status: "", message: "" });
        setExibirForm(true);
    }

    const acaoCadastrar = async e => {
        e.preventDefault();
        const metodo = editar ? "PUT" : "POST";
        try {
            let retornoAPI = await cadastraJogadorAPI(objeto, metodo);
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
        recuperaJogadores();
    }

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setObjeto({ ...objeto, [name]: value });
    }

    return (
        <JogadorContext.Provider value={
            {
                listaObjetos, alerta, remover, objeto, editarObjeto,
                acaoCadastrar, handleChange, novoObjeto, exibirForm, setExibirForm, listaEquipes
            }
        }>
            <Carregando carregando={carregando}>
                <Tabela />
            </Carregando>
            <Formulario />
        </JogadorContext.Provider>
    );
}

export default Jogador;
