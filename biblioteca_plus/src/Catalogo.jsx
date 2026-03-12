import Header from "./components/Header/Header.jsx";
import Grid from "./components/Grid/Grid.jsx";
import Footer from "./components/Footer/Footer.jsx";

export default function Catalogo() {
    return (
        <>
            <Header />
            <Grid titulo="Catálogo" textoBotao="VER MAIS" numeroLivros="100"/>
            <Footer />
        </>
    )
}