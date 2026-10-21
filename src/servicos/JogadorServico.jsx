export const getJogadoresAPI = async () => {
    const response = await fetch(`${process.env.REACT_APP_ENDERECO_API}/jogador`,
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
    const data = await response.json()
    return data;
}

export const getJogadorPorIdAPI = async id => {
    const response = await fetch(`${process.env.REACT_APP_ENDERECO_API}/jogador/${id}`,
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });
    const data = await response.json();
    return data;
}

export const deleteJogadorPorIdAPI = async id => {
    const response = await fetch(`${process.env.REACT_APP_ENDERECO_API}/jogador/${id}`,
        {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        });
    const data = await response.json();
    return data;
}

export const cadastraJogadorAPI = async (objeto, metodo) => {
    const response = await fetch(`${process.env.REACT_APP_ENDERECO_API}/jogador`, {
        method: metodo,
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(objeto),
    })
    const data = await response.json();
    return data;
}
