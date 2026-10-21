const Sobre = () => (
    <div className="tela">
        <div className="hero">
            <h1>Sobre o Arena Games</h1>
            <p className="subtitulo mb-0">Sistema desenvolvido na disciplina de Programação para Web - IFSul Passo Fundo</p>
        </div>
        <div className="card-arena p-4">
            <h4>O que o sistema faz</h4>
            <p>
                O Arena Games gerencia campeonatos de e-sports. É possível cadastrar os <strong>jogos</strong> (modalidades),
                as <strong>equipes</strong>, os <strong>campeonatos</strong> de cada jogo e as <strong>inscrições</strong> das
                equipes nos campeonatos, com pontuação e colocação final.
            </p>
            <h4>Tecnologias</h4>
            <ul>
                <li><strong>Frontend:</strong> PWA com React, React Router, React Bootstrap e Bootstrap Icons</li>
                <li><strong>Backend:</strong> API REST com Node.js, Express e PostgreSQL (arquitetura em camadas: entities, usecases, controllers e routes)</li>
                <li><strong>Nuvem:</strong> API e banco na Render, PWA na Vercel</li>
            </ul>
            <p className="subtitulo mb-0">Desenvolvido por Rodrigo Barbosa - Ciência da Computação</p>
        </div>
    </div>
);

export default Sobre;
