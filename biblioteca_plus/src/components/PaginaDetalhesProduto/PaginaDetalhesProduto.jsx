import { livros } from "../../dados/livros.js"
import Botao from "../Banner/Botao.jsx";
// import { useParams } from "react-router-dom";
import css from "./PaginaDetalhesProduto.module.css";

export default function PaginaDetalhesProduto() {
    // const{ id } =useParams();
    // const livro = livros.find((item) => item.id === id);
    //
    // if (!livro) {
    //     return (
    //         <section className={css.livroNaoEncontrado}>
    //             <h2>Livro não encontrado</h2>
    //             <p>Este livro não existe ou foi removido.</p>
    //             <Botao estilo="botao" rota="/catalogo" texto="Voltar para o catálogo"/>
    //         </section>
    //     );
    // }

    console.log(livros);

    return (
        <h1>EXISTO</h1>
    );
}