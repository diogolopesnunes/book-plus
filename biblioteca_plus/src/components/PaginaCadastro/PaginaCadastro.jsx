import css from './PaginaCadastro.module.css';
import {Link} from "react-router-dom";
import Botao from "../Botao/Botao.jsx";

export default function PaginaCadastro() {
    return (
        <div className={css.cadastro}>
            <form className={css.formulario}>
                <h2 className={css.formularioTitulo}>Cadastro</h2>

                <div>
                    <label className={css.label}>Nome</label>
                    <input className={css.input} type="text" id="nome" />
                </div>

                <div>
                    <label className={css.label}>Email</label>
                    <input className={css.input} type="email" id="email" />
                </div>

                <div>
                    <label className={css.label}>Senha</label>
                    <input className={css.input} type="new-password" id="senha" />
                </div>

                <div>
                    <label className={css.label}>Confirmar Senha</label>
                    <input className={css.input} type="new-password" id="senha" />
                </div>
                <Link to="/login">Já tenho conta</Link>

                <Botao texto="Cadastrar" cor="primary-color" hover="semHover" estilo="botaoCheio" rota="/login" altura="baixo"/>
            </form>
        </div>
    )
}