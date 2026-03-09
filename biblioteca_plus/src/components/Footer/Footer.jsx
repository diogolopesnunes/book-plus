import css from "./Footer.module.css";
import {Link} from "react-router-dom";

export default function Footer({ titulo = "BOOK PLUS" }) {
    return (
        <>
            <div className={css.footer}>
                <div>
                    <div className={css.tituloDiv}>
                        <span className={"material-symbols-outlined" + " " + css.icone}>auto_stories</span>
                        <h1 className={css.titulo}>{titulo}</h1>
                    </div>
                    <p className={css.texto}>Sua livraria digital de confiança. Uma curadoria minimalista das obras mais
                        impactantes para o seu crescimento.</p>

                    <div className={css.interacoes}>
                        <span className={css.compartilhar}></span>
                        <span className={css.coracao}></span>
                    </div>
                </div>
                <nav className={css.nav}>
                    <div className={css.linksDiv}>
                        <Link to="/pagina">Lançamentos</Link>
                        <Link to="/pagina">Mais Vendidos</Link>
                        <Link to="/pagina">E-books</Link>
                    </div>
                    <div className={css.linksDiv}>
                        <Link to="/pagina">Ajuda</Link>
                        <Link to="/pagina">Envios</Link>
                        <Link to="/pagina">Trocas</Link>
                    </div>
                    <div className={css.linksDiv}>
                        <Link to="/pagina">Sobre Nós</Link>
                        <Link to="/pagina">Contato</Link>
                        <Link to="/pagina">Privacidade</Link>
                    </div>
                </nav>
            </div>
        </>
    )
}