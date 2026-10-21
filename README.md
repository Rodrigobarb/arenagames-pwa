# Arena Games - PWA (Frontend)

PWA em React para o **Arena Games**, sistema de gerenciamento de campeonatos de e-sports.
Trabalho prático da disciplina de Programação para Web - IFSul Passo Fundo.

## Telas
- **Home**: resumo com totais e os campeonatos cadastrados
- **Jogos**, **Equipes**, **Campeonatos** e **Inscrições**: CRUD completo (listar, cadastrar, editar e remover)
- **Sobre**

## Tecnologias
React (create-react-app com template PWA), React Router, React Bootstrap, Bootstrap Icons e Context API.

## Como rodar localmente
```bash
yarn install
yarn start
```
O endereço da API fica no arquivo `.env`:
```
REACT_APP_ENDERECO_API=http://127.0.0.1:3002
```
Na Vercel, configure a variável de ambiente `REACT_APP_ENDERECO_API` com o endereço da API na Render.

## Estrutura
```
src/
  App.jsx                     rotas da aplicação
  componentes/
    Menu.jsx                  barra de navegação + <Outlet/>
    comuns/                   componentes reaproveitáveis (Alerta, Carregando, CampoEntrada, CampoSelect, Dialogo...)
    telas/
      Home.jsx, Sobre.jsx
      jogo/ equipe/ campeonato/ inscricao/   (Componente principal, Context, Tabela e Formulario)
  servicos/                   funções que chamam a API com fetch
```
