import css from './Botao.module.css'
import {Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Botao({ estilo, cor, hover, fonte, altura, texto, rota, aoClicar, tipo}) {

    const navigate = useNavigate();

    async function tipoDeBotao(e) {
        if (aoClicar) {
            await aoClicar(e);
        }

        if (rota) {
            navigate(rota);
        }
    }

    return (
            <button type={tipo} onClick={tipoDeBotao} className={css[estilo] + " " + css[cor] + " " + css[hover] + " " + css[fonte] + " " + css[altura]}>{texto}</button>
    )
}