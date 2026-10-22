import { useState, useEffect } from 'react';
import JogoContext from './JogoContext';
import { getJogosAPI, getJogoPorIdAPI, deleteJogoPorIdAPI, cadastraJogoAPI } from '../../../servicos/JogoServico';
import Tabela from './Tabela';
import Formulario from './Formulario';
import Carregando from '../../comuns/Carregando';

function Jogo() {

    const [alerta, setAlerta] = useState({ status: "", message: "" });
    const [listaObjetos, setListaObjetos] = useState([]);
    const [carregando, setCarregando] = useState(true);
    const [editar, setEditar] = useState(false);
    const [exibirForm, setExibirForm] = useState(false);

    const objetoVazio = {
        id: 0,
        nome: "",
        genero: ""
    };
    const [objeto, setObjeto] = useState(objetoVazio);

    const recuperaJogos = async () => {
        setCarregando(true);
        const lista = await getJogosAPI();
        setListaObjetos(Array.isArray(lista) ? lista : []);
        setCarregando(false);
    }

    const remover = async id => {
        if (window.confirm('Deseja remover este jogo?')) {
            let retornoAPI = await deleteJogoPorIdAPI(id);
            setAlerta({ status: retornoAPI.status, message: retornoAPI.message });
            // se a API não deixou remover, mostra um alerta na tela
            if (retornoAPI.status === 'error') {
                window.alert(retornoAPI.message);
            }
            recuperaJogos();
        }
    }

    useEffect(() => {
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
        setObjeto(await getJogoPorIdAPI(id));
        setEditar(true);
        setAlerta({ status: "", message: "" });
        setExibirForm(true);
    }

    const acaoCadastrar = async e => {
        e.preventDefault();
        const metodo = editar ? "PUT" : "POST";
        try {
            let retornoAPI = await cadastraJogoAPI(objeto, metodo);
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
        recuperaJogos();
    }

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setObjeto({ ...objeto, [name]: value });
    }

    return (
        <JogoContext.Provider value={
            {
                listaObjetos, alerta, remover, objeto, editarObjeto,
                acaoCadastrar, handleChange, novoObjeto, exibirForm, setExibirForm
            }
        }>
            <Carregando carregando={carregando}>
                <Tabela />
            </Carregando>
            <Formulario />
        </JogoContext.Provider>
    );
}

export default Jogo;
