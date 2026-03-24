import css from './PaginaCadastro.module.css';
import {Link} from "react-router-dom";
import Botao from "../Botao/Botao.jsx";
import {useState} from "react";

export default function PaginaCadastro() {

    const [alerta, setAlerta] = useState("");

    function placeholderSubmit(e) {
        e.preventDefault();
        setAlerta("Não foi possível cadastrar")
    }

    return (
        <div className={css.cadastro}>
            {alerta && <p className={css.alerta} key={alerta}>{alerta}</p>}
            <form className={css.formulario} onSubmit={placeholderSubmit}>
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
                    <input className={css.input} type="password" id="senha" />
                </div>

                <div>
                    <label className={css.label}>Confirmar Senha</label>
                    <input className={css.input} type="password" id="senha" />
                </div>
                <Link to="/login">Já tenho conta</Link>

                <Botao tipo="submit" texto="Cadastrar" cor="primary-color" hover="semHover" estilo="botaoCheio" altura="baixo"/>
            </form>
        </div>
    )
}