import css from "./Card.module.css";
import {Link} from "react-router-dom";
import Botao from "../Botao/Botao.jsx";

export default function Card({ genero, titulo, autor, imagem, rota }) {

    const logado = localStorage.getItem("token");

    return (
        <div>
            <div className={css.cardDiv}>
                <Link to={rota}>
                    <div className={css.limiteImagem}>
                        <div className={css.telaEscura}></div>
                        <img className={css.cardImagem} src={imagem}></img>
                    </div>
                </Link>
                <div className={css.cardTextos}>
                    <span className={css.generos}>{genero}</span>
                    <h3 className={css.titulos}>{titulo}</h3>
                    <p className={css.textos}>{autor}</p>
                    { logado &&
                        <div className={css.adminDiv}>
                            <Botao estilo="botaoCheio" cor="primary-color" texto="Excluir" />
                            <Botao estilo="botao" cor="branco" texto="Editar" />
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}