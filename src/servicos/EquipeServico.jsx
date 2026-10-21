export const getEquipesAPI = async () => {
    const response = await fetch(`${process.env.REACT_APP_ENDERECO_API}/equipe`,
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
    const data = await response.json()
    return data;
}

export const getEquipePorIdAPI = async id => {
    const response = await fetch(`${process.env.REACT_APP_ENDERECO_API}/equipe/${id}`,
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });
    const data = await response.json();
    return data;
}

export const deleteEquipePorIdAPI = async id => {
    const response = await fetch(`${process.env.REACT_APP_ENDERECO_API}/equipe/${id}`,
        {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        });
    const data = await response.json();
    return data;
}

export const cadastraEquipeAPI = async (objeto, metodo) => {
    const response = await fetch(`${process.env.REACT_APP_ENDERECO_API}/equipe`, {
        method: metodo,
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(objeto),
    })
    const data = await response.json();
    return data;
}
