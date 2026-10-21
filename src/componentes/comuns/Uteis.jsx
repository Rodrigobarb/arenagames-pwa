export const formatoMoeda = (valor) => {
    let vrl = Number(valor);
    let valorFormatado = vrl.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 2 });
    return valorFormatado;
}

// Converte "2026-10-21" para "21/10/2026"
export const formatoData = (data) => {
    if (!data) return "-";
    const [ano, mes, dia] = data.split("-");
    return `${dia}/${mes}/${ano}`;
}

// Cor do badge conforme a situação do campeonato
export const corSituacao = (situacao) => {
    switch (situacao) {
        case 'Inscrições abertas': return 'success';
        case 'Em andamento': return 'warning';
        case 'Finalizado': return 'secondary';
        default: return 'info';
    }
}

// Mostra a colocação como 1º, 2º... ou "-" se ainda não tem
export const formataColocacao = (colocacao) => {
    return colocacao ? colocacao + 'º' : '-';
}
