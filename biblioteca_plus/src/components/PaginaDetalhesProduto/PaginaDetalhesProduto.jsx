import { livros } from "../../dados/livros.js"
import Botao from "../Banner/Botao.jsx";
import { useParams } from "react-router-dom";
import css from "./PaginaDetalhesProduto.module.css";

export default function PaginaDetalhesProduto() {
    const{ id } =useParams();
    const livro = livros.find((item) => item.id === id);

    if (!livro) {
        return (
            <section className={css.livroNaoEncontrado}>
                <h2>Livro não encontrado</h2>
                <p>Este livro não existe ou foi removido.</p>
                <Botao estilo="botao" rota="/catalogo" texto="Voltar para o catálogo"/>
            </section>
        );
    }

    // Exemplo de descrição e faixa etária fictícias, pois não existem no objeto original
    const descricao = livro.descricao || "Descrição não disponível para este livro.";
    const faixaEtaria = livro.faixaEtaria || "Livre";

    return (
        <section className={css.detalhesSection}>
            <div className={css.detalhesLivro}>
                <div className={css.imagemDiv}>
                    <img className={css.imagemLivro} src={livro.imagem} alt={livro.titulo} />
                </div>
                <div className={css.infoDiv}>
                    <h2 className={css.titulo}>{livro.titulo}</h2>
                    <p className={css.descricao}>{livro.descricao}</p>
                    <p className={css.descricao}>Autor: {livro.autor}</p>
                    <p className={css.descricao}>Categoria: {livro.genero}</p>
                    <p className={css.descricao}>Faixa etária: {livro.faixaEtaria}</p>
                    <Botao className={css.botao} estilo="botao" rota="/catalogo" texto="Voltar" fonte="bold"/>
                </div>
            </div>
        </section>
    );
}