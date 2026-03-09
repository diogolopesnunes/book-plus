import css from "./Header.module.css";
import {Link} from "react-router-dom";

export default function Header({ titulo = "BOOK PLUS" }) {
    return (
        <header className={css.header1 + " d-flex"}>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 d-flex justify-content-around align-items-center">
                        <div className={css.tituloDiv}>
                            <span className={"material-symbols-outlined" + " " + css.icone}>auto_stories</span>
                            <h1 className={css.titulo}>{titulo}</h1>
                        </div>

                        <nav className={css.nav + " d-flex justify-content-around"}>
                            <a className="" href="">CATÁLOGO</a>
                            <a className="" href="">LANÇAMENTOS</a>
                            <a className="" href="">MAIS VENDIDOS</a>
                            <a className={css.botao_login} href="">LOGIN ADMIN</a>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}