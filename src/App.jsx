import { createBrowserRouter, RouterProvider } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './index.css';
import Menu from "./componentes/Menu";
import Home from "./componentes/telas/Home";
import Sobre from "./componentes/telas/Sobre";
import Jogo from "./componentes/telas/jogo/Jogo";
import Equipe from "./componentes/telas/equipe/Equipe";
import Campeonato from "./componentes/telas/campeonato/Campeonato";
import Inscricao from "./componentes/telas/inscricao/Inscricao";

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
        path: "campeonatos",
        element: <Campeonato />
      },
      {
        path: "inscricoes",
        element: <Inscricao />
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
