import css from "./Grid.module.css";

import Card from "./Card";
import Botao from "../Banner/Botao.jsx";
import { livros } from "../../dados/livros"; 

export default function Grid({titulo, textoBotao, rotaBotao, numeroLivros}) {
    return (
        <section>
            <div className={css.gridSection}>
                <div className={css.divNovidades}>
                    <div className={css.gridSlash}></div>
                    <span className={css.gridSpan}>NOVIDADES</span>
                </div>
                <h2 className={css.gridH2}>{titulo}</h2>
            </div>

            <div className={css.gridDiv}>
                {livros.slice(0, [numeroLivros]).map((livro) => (
                    <Card
                        key={livro.id}
                        genero={livro.genero}
                        titulo={livro.titulo}
                        autor={livro.autor}
                        imagem={livro.imagem}
                        rota={livro.rota ? livro.rota : `/livro/${livro.id}`}
                    />
                ))}
            </div>

            <Botao estilo="botao" texto={textoBotao} rota={rotaBotao}/>
        </section>
    )
}