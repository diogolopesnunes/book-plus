import css from "./Header.module.css";
import {Link} from "react-router-dom";
import Botao from "../Botao/Botao.jsx";

export default function Header({ titulo = "BOOK EXTRA" }) {

    const logado = localStorage.getItem("token");

    return (
        <>
            <div className={css.headerEspaco}></div>
            <header className={css.header1 + " d-flex"}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 d-flex justify-content-around align-items-center">
                            <Link to="/">
                                <div className={css.tituloDiv}>
                                        <span className={"material-symbols-outlined" + " " + css.icone}>auto_stories</span>
                                        <h1 className={css.titulo}>{titulo}</h1>
                                </div>
                            </Link>
                            <nav className={css.nav + " d-flex justify-content-around"}>
                                <Link to="/catalogo">CATÁLOGO</Link>
                                <a className="" href="">LANÇAMENTOS</a>
                                <a className="" href="">MAIS VENDIDOS</a>
                                <Botao estilo="botaoCheio" cor="primary-color" hover="semHover" texto="LOGIN" fonte="bold" rota="/login"/>
                                {logado && (
                                    <Botao estilo="botaoCheio" cor="primary-color" hover="semHover" texto="Dashboard" fonte="bold" rota="/dashboard"/>
                                )}
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}