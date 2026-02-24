import css from "./Card.module.css";

export default function Card({ genero, titulo, autor, imagem }) {
    return (
        <div className={css.cardDiv}>
            <div className={css.limiteImagem}>
                <div className={css.telaEscura}></div>
                <img className={css.cardImagem} src={imagem}></img>
            </div>
            <div className={css.cardTextos}>
                <span className={css.generos}>{genero}</span>
                <h3 className={css.titulos}>{titulo}</h3>
                <p className={css.textos}>{autor}</p>
            </div>
        </div>
    )
}