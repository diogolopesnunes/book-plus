import css from "./Header.module.css";

export default function Header({ titulo = "BOOK PLUS" }) {
    return (
        <header className={css.header1 + " d-flex"}>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 d-flex justify-content-around align-items-center">
                        <h1 className={css.titulo}>{titulo}</h1>

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