import css from './PaginaCadastrarLivro.module.css';
import {Link} from "react-router-dom";
import { useState } from "react";
import Botao from "../Banner/Botao.jsx";

export default function PaginaCadastrarLivro() {

    async function cadastrarLivro() {

        const [titulo, setTitulo] = useState('');
        const [autor, setAutor] = useState('');
        const [imagem, setImagem] = useState('');
        const [categoria, setCategoria] = useState('');
        const [descricao, setDescricao] = useState('');
        const [faixaEtaria, setFaixaEtaria] = useState('');

        try {
            const resposta = await fetch('https://apps-api-livros.ucxocw.easypanel.host/livro', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(livro)
            });

            const dados = await resposta.json();

            console.log(dados);
        } catch (erro) {
            console.error(erro);
        }
    }

    return (
        <div className={css.cadastro}>
            <form className={css.formulario}>
                <h2 className={css.formularioTitulo}>Cadastrar Livro</h2>

                <label className={css.label}>Link da Imagem</label>
                <input className={css.input} type="text" id="imagem" onChange={(e) => setImagem(e.target.value)}/>

                <label className={css.label}>Título</label>
                <input className={css.input} type="text" id="titulo" onChange={(e) => setTitulo(e.target.value)}/>

                <label className={css.label}>Categoria</label>
                <input className={css.input} type="text" id="categoria" />

                <label className={css.label}>Descrição</label>
                <input className={css.input} type="text" id="descricao" />

                <label className={css.label}>Autor</label>
                <input className={css.input} type="text" id="autor" />

                <label className={css.label}>Faixa Etária</label>
                <input className={css.input} type="text" id="faixa_etaria" />

                <Link to="/dashboard">Cancelar</Link>

                <Botao texto="Cadastrar" cor="primary-color" hover="semHover" estilo="botaoCheio" rota="/cadastrar_livro" altura="baixo" aoClicar={cadastrarLivro}/>
            </form>
        </div>
    )
}