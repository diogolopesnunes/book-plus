import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./Home.jsx";
import Login from "./Login.jsx";
import Cadastro from "./Cadastro.jsx";
import Catalogo from "./Catalogo.jsx";
import DetalhesProduto from "./DetalhesProduto.jsx";
import InicioDaPagina from "./InicioDaPagina.jsx";
import Dashboard from "./Dashboard.jsx";
import CadastrarLivro from "./CadastrarLivro.jsx";

export default function App() {
    return (
        <BrowserRouter>
            <InicioDaPagina />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="/catalogo" element={<Catalogo />} />
                <Route path="/livro/:id" element={<DetalhesProduto />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/cadastrar_livro" element={<CadastrarLivro />} />
            </Routes>
        </BrowserRouter>
    )
}