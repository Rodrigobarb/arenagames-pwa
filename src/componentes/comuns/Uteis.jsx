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

// Ícone de medalha para as três primeiras colocações
export const medalha = (colocacao) => {
    if (colocacao === 1) return '🥇';
    if (colocacao === 2) return '🥈';
    if (colocacao === 3) return '🥉';
    return colocacao ? colocacao + 'º' : '-';
}
