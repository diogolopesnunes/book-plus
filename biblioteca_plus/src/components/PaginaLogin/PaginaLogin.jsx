import css from './PaginaLogin.module.css';
import {Link} from "react-router-dom";
import Botao from "../Banner/Botao.jsx";

export default function PaginaLogin() {
    return (
        <div className={css.login}>
            <form className={css.formulario}>
                <h2 className={css.formularioTitulo}>Login</h2>

                <label className={css.label}>Email</label>
                <input className={css.input} type="email" id="email" />

                <label className={css.label}>Senha</label>
                <input className={css.input} type="current-password" id="senha" />

                <Link to="/cadastro">Ainda não tenho conta</Link>

                <Botao texto="Logar" cor="primary-color" hover="semHover" estilo="botaoCheio" rota="/catalogo" altura="baixo"/>
            </form>
        </div>
    )
}