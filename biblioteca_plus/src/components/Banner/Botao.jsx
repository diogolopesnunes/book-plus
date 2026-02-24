import css from './Botao.module.css'

export default function Botao({ estilo, texto }) {
    return (
        <button className={css[estilo]}>{texto}</button>
    )
}