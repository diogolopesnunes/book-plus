import css from "./Footer.module.css";
import {Link} from "react-router-dom";

export default function Footer({ titulo = "BOOK EXTRA" }) {
    return (
        <>
            <div className={css.footer}>
                <div className={css.footer1}>
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
                            <p className={css.linksTitulo}>Explorar</p>
                            <Link className={css.link} to="/pagina">Lançamentos</Link>
                            <Link className={css.link} to="/pagina">Mais Vendidos</Link>
                            <Link className={css.link} to="/pagina">E-books</Link>
                        </div>
                        <div className={css.linksDiv}>
                            <p className={css.linksTitulo}>Suporte</p>
                            <Link className={css.link} to="/pagina">Ajuda</Link>
                            <Link className={css.link} to="/pagina">Envios</Link>
                            <Link className={css.link} to="/pagina">Trocas</Link>
                        </div>
                        <div className={css.linksDiv}>
                            <p className={css.linksTitulo}>Institucional</p>
                            <Link className={css.link} to="/pagina">Sobre Nós</Link>
                            <Link className={css.link} to="/pagina">Contato</Link>
                            <Link className={css.link} to="/pagina">Privacidade</Link>
                        </div>
                    </nav>
                </div>
                <div className={css.footer2}>
                    <p className={css.creditos}>© 2024 Book Plus. Todos os direitos reservados.</p>
                    <p className={css.creditos}>Desenvolvido por Diogo no SENAI</p>
                </div>
            </div>
        </>
    )
}