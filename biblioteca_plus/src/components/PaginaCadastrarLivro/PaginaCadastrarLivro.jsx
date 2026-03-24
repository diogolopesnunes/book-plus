import css from './PaginaCadastrarLivro.module.css';
import {Link} from "react-router-dom";
import { useState } from "react";
import Botao from "../Botao/Botao.jsx";

export default function PaginaCadastrarLivro() {

    const logado = localStorage.getItem("token");

    const [titulo, setTitulo] = useState('');
    const [autor, setAutor] = useState('');
    const [imagem, setImagem] = useState('');
    const [categoria, setCategoria] = useState('');
    const [descricao, setDescricao] = useState('');
    const [faixa_etaria, setFaixa_Etaria] = useState('');

    async function cadastrarLivro(e) {
        console.log("FUNÇÃO CHAMADA");
        e.preventDefault()

            const livro = {
                titulo,
                autor,
                imagem,
                categoria,
                descricao,
                faixa_etaria
            };

        try {
            const resposta = await fetch('https://apps-api-livros.ucxocw.easypanel.host/livro', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${logado}`
                },
                body: JSON.stringify(livro)
            });

            const dados = await resposta.json();

            console.log(resposta.status, dados);

            console.log(dados);
        } catch (erro) {
            console.error(erro);
        }
    }

    return (
        <div className={css.cadastro}>
            <form className={css.formulario} onSubmit={cadastrarLivro} >
                <h2 className={css.formularioTitulo}>Cadastrar Livro</h2>

                <div>
                    <label className={css.label}>Link da Imagem</label>
                    <input className={css.input} type="text" value={imagem} onChange={(e) => setImagem(e.target.value)}/>
                </div>

                <div>
                    <label className={css.label}>Título</label>
                    <input className={css.input} type="text" value={titulo} onChange={(e) => setTitulo(e.target.value)}/>
                </div>

                <div>
                    <label className={css.label}>Categoria</label>
                    <input className={css.input} type="text" value={categoria} onChange={(e) => setCategoria(e.target.value)}/>
                </div>

                <div>
                    <label className={css.label}>Descrição</label>
                    <input className={css.input} type="text" value={descricao} onChange={(e) => setDescricao(e.target.value)}/>
                </div>

                <div>
                    <label className={css.label}>Autor</label>
                    <input className={css.input} type="text" value={autor} onChange={(e) => setAutor(e.target.value)}/>
                </div>

                <div>
                    <label className={css.label}>Faixa Etária</label>
                    <input className={css.input} type="text" value={faixa_etaria} onChange={(e) => setFaixa_Etaria(e.target.value)}/>
                </div>
                
                <Link to="/dashboard">Cancelar</Link>

                {logado && (
                    <Botao tipo="submit" texto="Cadastrar" cor="primary-color" hover="semHover" estilo="botaoCheio" altura="baixo"/>
                    )}
            </form>
        </div>
    )
}