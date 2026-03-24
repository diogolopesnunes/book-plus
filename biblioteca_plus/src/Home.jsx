import Header from "./components/Header/Header.jsx";
import Banner from "./components/Banner/Banner.jsx";
import Grid from "./components/Grid/Grid.jsx";
import Footer from "./components/Footer/Footer.jsx";

export default function Home() {
    return (
        <>
            <Header />
            <Banner />
            <Grid titulo="Destaques da Semana" subtitulo="NOVIDADES" textoBotao="VER CATÁLOGO COMPLETO" rotaBotao="/catalogo" numeroLivros="12" />
            <Footer />
        </>
    )
}
