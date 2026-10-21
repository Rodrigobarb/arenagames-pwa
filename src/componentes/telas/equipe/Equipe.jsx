import { useState, useEffect } from 'react';
import EquipeContext from './EquipeContext';
import { getEquipesAPI, getEquipePorIdAPI, deleteEquipePorIdAPI, cadastraEquipeAPI } from '../../../servicos/EquipeServico';
import Tabela from './Tabela';
import Formulario from './Formulario';
import Carregando from '../../comuns/Carregando';
import { getJogosAPI } from '../../../servicos/JogoServico';


function Equipe() {

    const [alerta, setAlerta] = useState({ status: "", message: "" });
    const [listaObjetos, setListaObjetos] = useState([]);
    const [carregando, setCarregando] = useState(true);
    const [editar, setEditar] = useState(false);
    const [exibirForm, setExibirForm] = useState(false);

    const objetoVazio = {
        id: 0,
        nome: "",
        sigla: "",
        cidade: "",
        jogo: ""
    };
    const [objeto, setObjeto] = useState(objetoVazio);

    const recuperaEquipes = async () => {
        setCarregando(true);
        const lista = await getEquipesAPI();
        setListaObjetos(Array.isArray(lista) ? lista : []);
        setCarregando(false);
    }

    const remover = async id => {
        if (window.confirm('Deseja remover esta equipe?')) {
            let retornoAPI = await deleteEquipePorIdAPI(id);
            setAlerta({ status: retornoAPI.status, message: retornoAPI.message });
            recuperaEquipes();
        }
    }

    // lista de jogos para o select da chave estrangeira
    const [listaJogos, setListaJogos] = useState([]);

    const recuperaJogos = async () => {
        const lista = await getJogosAPI();
        setListaJogos(Array.isArray(lista) ? lista : []);
    }

    useEffect(() => {
        recuperaEquipes();
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
        setObjeto(await getEquipePorIdAPI(id));
        setEditar(true);
        setAlerta({ status: "", message: "" });
        setExibirForm(true);
    }

    const acaoCadastrar = async e => {
        e.preventDefault();
        const metodo = editar ? "PUT" : "POST";
        try {
            let retornoAPI = await cadastraEquipeAPI(objeto, metodo);
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
        recuperaEquipes();
    }

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setObjeto({ ...objeto, [name]: value });
    }

    return (
        <EquipeContext.Provider value={
            {
                listaObjetos, alerta, remover, objeto, editarObjeto,
                acaoCadastrar, handleChange, novoObjeto, exibirForm, setExibirForm, listaJogos
            }
        }>
            <Carregando carregando={carregando}>
                <Tabela />
            </Carregando>
            <Formulario />
        </EquipeContext.Provider>
    );
}

export default Equipe;
