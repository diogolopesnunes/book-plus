import css from './Botao.module.css'
import {Link} from "react-router-dom";

export default function Botao({ estilo, cor, hover, fonte, altura, texto, rota, aoClicar }) {
    return (
        <Link to={rota}>
            <button onClick={aoClicar} className={css[estilo] + " " + css[cor] + " " + css[hover] + " " + css[fonte] + " " + css[altura]}>{texto}</button>
        </Link>
    )
}