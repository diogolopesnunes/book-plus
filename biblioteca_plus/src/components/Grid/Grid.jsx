import css from "./Grid.module.css";
import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import Card from "../Card/Card.jsx";
import Botao from "../Botao/Botao.jsx";

export default function Grid({titulo, subtitulo, textoBotao, rotaBotao, numeroLivros}) {

    const location = useLocation();

    const logado = localStorage.getItem("token");
    const [livros, setLivros] = useState([]);
    const [total, setTotal] = useState(0);
    const [filtro, setFiltro] = useState("");
    const [tipoFiltro, setTipoFiltro] = useState("autor");
    const livrosFiltrados = livros.filter((livro) => {
        if (tipoFiltro === "autor") {
            return livro.autor.toLowerCase().includes(filtro.toLowerCase());
        } else {
            return livro.titulo.toLowerCase().includes(filtro.toLowerCase());
        }
    });

    async function buscarLivro() {
        let busca = await fetch("https://apps-api-livros.ucxocw.easypanel.host/livro?autor=", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        })

        busca = await busca.json();

        console.log(busca);

        setLivros(busca.livros);
        setTotal(busca.total);

    }

    useEffect(function() {
        buscarLivro();
    }, [])

    return (
        <section>
            <div className={css.gridSection}>
                <div className={css.divNovidades}>
                    <div className={css.gridSlash}></div>
                    <span className={css.gridSpan}>{subtitulo}</span>
                </div>
                <div className={css.divTitulo}>
                    <h2 className={css.gridH2}>{titulo}</h2>
                    <div className={css.divFiltro}>
                        {logado && location.pathname === "/dashboard" && (
                        <Botao estilo="botao" texto={"Cadastra Livro"} rota={"/cadastrar_livro"}/>
                            )}
                        <input
                            className={css.filtro}
                            type="text"
                            placeholder="Buscar"
                            value={filtro}
                            onChange={(e) => setFiltro(e.target.value)}
                        />
                        <select className={css.filtro} value={tipoFiltro} onChange={(e) => setTipoFiltro(e.target.value)}>
                            <option disabled="true" >Filtrar por:</option>
                            <option value="autor">Nome do Autor</option>
                            <option value="titulo">Título do Livro</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className={css.gridDiv + " " + css.gridLivros}>
                {livrosFiltrados.slice(0, numeroLivros).map((livro) => (
                    <Card
                        key={livro.id}
                        genero={livro.categoria}
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