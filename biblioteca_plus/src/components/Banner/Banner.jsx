import css from "./Banner.module.css";

export default function Banner() {
    return (
        <section className={css.banner_section}>
            <div className={css.banner_div}>
                <div className={css.banner_textos}>
                    <div className={css.banner_textos_div}>
                        <span className={css.span}>CURADORIA EXCLUSIVA</span>
                        <h2 className={css.banner_h2}>Descubra seu próximo capítulo.</h2>
                        <p className={css.banner_p}>Mergulhe em histórias que transformam. Explore nossa seleção premium de obras clássicas e contemporâneas.</p>
                    </div>
                </div>
            </div>
            <div className={css.banner_gradiente}></div>
        </section>
    )
}