const Sobre = () => (
    <div className="container py-4">
        <h1>Sobre</h1>
        <p>
            O <strong>Arena Games</strong> é um sistema simples de e-sports.
            Nele é possível cadastrar os jogos, as equipes (cada uma joga um jogo) e os
            jogadores (cada um pertence a uma equipe).
        </p>
        <h4>Tecnologias usadas</h4>
        <ul>
            <li>Frontend: PWA com React, React Router e React Bootstrap</li>
            <li>Backend: API com Node.js, Express e PostgreSQL</li>
            <li>Hospedagem: API e banco na Render, PWA na Vercel</li>
        </ul>
        <p className="text-muted">
            Trabalho prático da disciplina de Programação para Web - IFSul Câmpus Passo Fundo.<br />
            Aluno: Rodrigo Barbosa
        </p>
    </div>
);

export default Sobre;
