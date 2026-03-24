import Header from "./components/Header/Header.jsx";
import Grid from "./components/Grid/Grid.jsx";
import Footer from "./components/Footer/Footer.jsx";

export default function Catalogo() {
    return (
        <>
            <Header />
            <Grid titulo="Catálogo" subtitulo="NOVIDADES" textoBotao="VER MAIS" numeroLivros="90"/>
            <Footer />
        </>
    )
}