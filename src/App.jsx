import { createBrowserRouter, RouterProvider } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './index.css';
import Menu from "./componentes/Menu";
import Home from "./componentes/telas/Home";
import Sobre from "./componentes/telas/Sobre";
import Jogo from "./componentes/telas/jogo/Jogo";
import Equipe from "./componentes/telas/equipe/Equipe";
import Jogador from "./componentes/telas/jogador/Jogador";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Menu />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "jogos",
        element: <Jogo />
      },
      {
        path: "equipes",
        element: <Equipe />
      },
      {
        path: "jogadores",
        element: <Jogador />
      },
      {
        path: "sobre",
        element: <Sobre />
      }
    ]
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
