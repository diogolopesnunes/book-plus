import Header from "./components/Header/Header.jsx";
import Banner from "./components/Banner/Banner.jsx";
import Grid from "./components/Grid/Grid.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Botao from "./components/Botao/Botao.jsx";

export default function Dashboard() {
    return (
        <>
            <Header />
            <Grid titulo="Administrar Livros" subtitulo="CATÁLOGO" textoBotao="VER CATÁLOGO" rotaBotao="/catalogo" numeroLivros="100" />
            <Footer />
        </>
    )
}
