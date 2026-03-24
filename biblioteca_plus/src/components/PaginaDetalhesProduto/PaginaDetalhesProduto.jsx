import Botao from "../Botao/Botao.jsx";
import { useParams } from "react-router-dom";
import css from "./PaginaDetalhesProduto.module.css";
import { useEffect, useState } from "react";

export default function PaginaDetalhesProduto() {
    const{ id } =useParams();

    const [livro, setLivro] = useState(null);
    const [carregando, setCarregando] = useState(true);

    useEffect(() => {
        async function buscarLivro() {
            try {
                const resposta = await fetch("https://apps-api-livros.ucxocw.easypanel.host/livro");
                const dados = await resposta.json();

                const livroEncontrado = dados.livros.find(
                    l => l.id === Number(id)
                );

                setLivro(livroEncontrado);
            } catch (erro) {
                console.error("Erro:", erro);
            }
        }

        buscarLivro();
    }, [id]);


    if (!livro) {
        return (
            <section className={css.livroNaoEncontrado}>
                <h2>Livro não encontrado</h2>
                <p>Este livro não existe ou foi removido.</p>
                <Botao estilo="botao" rota="/catalogo" texto="Voltar para o catálogo"/>
            </section>
        );
    }

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
                    <p className={css.descricao}>Categoria: {livro.categoria}</p>
                    <p className={css.descricao}>Faixa etária: {livro.faixa_etaria}</p>
                    <Botao className={css.botao} estilo="botao" rota="/catalogo" texto="Voltar" fonte="bold"/>
                </div>
            </div>
        </section>
    );
}