import css from "./Grid.module.css";
import Card from "./Card";
import Botao from "../Banner/Botao.jsx";

export default function Grid({titulo, textoBotao, rotaBotao}) {
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
                <Card genero="POESIA" titulo="O Silêncio do Mar" autor="Helena Vasconcelos" imagem="https://lh3.googleusercontent.com/aida-public/AB6AXuAfPUvluJk-HiK0Px5gMH_BQBTb27qwJ60GGLCTrpOAAYFz8ODYpVVOV2O3H0-BSlmEa2ohe6ftiet7tpJzzXqwrqqUor68qTw-bwD1uGjhWJcvHsWClI0VuBYce5rxZwgBVQV4bhHqPxrEBM3LkzshPTJe7ieqD4TS1WBM3tBpYhGbRcqANDyZcqO8gLGClOuhnWi0GrUe89miMPaSuLf43oTjqYI0bFS_SBPM5Oh-f_SIfyjMhezNzi5D1Mv_gaT50wKuwIsP8bdt" />
                <Card genero="ROMANCE" titulo="Caminhos de Areia" autor="Marcos Dutra" imagem="https://lh3.googleusercontent.com/aida-public/AB6AXuBV0Fo6K0kg37JnY2R67Fc9vlpJ4pwABfTQsIXi9LAdJOi8oz6Y3xsHDbk_5w5Hp8YSNjmdpSpjYuOlnVUm-uy7b45GWzXqhhI9-ao9rt8Q2lrG9nNo2lgys-BBnYPVXxc8VVcqUNy_PPpbX7N2Z5hRfoziivBV6HIgVrjo8zW0sqjyXYCFaEmdF9Cb-fRdOKMYPed3WE9LQybhTTrWaUn0WJftRaZvSO8udDnj2HI10poLHdjIE2qfvT7Qz7F5D9LYyPF_qnOT-z-D" />
                <Card genero="ENSAIOS" titulo="Arquitetura da Alma" autor="Beatriz Muniz" imagem="https://lh3.googleusercontent.com/aida-public/AB6AXuB8VyP47_-PgunXI5hTdpn5e_owd_pT-1_tY6trdpnEXHEe9sO6ybipb7pxSkP7hu54OJxwfj2LJ3K_885etjv0OXG2Msa_37dVO0YgCsEfyl9Ih6YRCy8b4pcTAiPHNScTg9f7P1suLyTLjbQpvOF2fu3MA4cFToqfJY_8CcPJPiVvdvzxDU91Vboa9fzVFZCf3OLKL3lUiPKgJHTgdqYKD9uPo55yF2b2WY68rg-K8cwOom3jkFjsXIK8lit88024T_n8yjqD1kaL" />
                <Card genero="MISTÉRIO" titulo="O Último Inverno" autor="Ricardo Almeida" imagem="https://lh3.googleusercontent.com/aida-public/AB6AXuAURKfYJHJw6LLOsifFzm7CAan-Kw4sdvlY2yyE-RjNdqOuAhBvlXXJZBQSt01H_rmgrFGXhpsGxir_GPmSqxfW6zsRfFDKE1yyLi91QXM4ZltWse8vjQ5qwflgoj1jLHyhH8EmKzueAbeYhY-2ynolxHQxWikUS9t4-CZyLYjgy77QmqitnknAwAuHjuQchnjtv7CR6Z2Z3iwI3dD_cChz7-azkF60eFyKoHhjpOy8R8Xvtoe5PEsHZlL_ij7Unm-GwXENrTrkdpa-" />
                <Card genero="CRÔNICAS" titulo="Crônicas da Capital" autor="Fernanda Costa" imagem="https://lh3.googleusercontent.com/aida-public/AB6AXuCCKr_gIoXXy95TZvHUJeV5yR_iaxKnqfvrnMCL13IkIE9jYcb59TxKX69WSPlIiD_Bt_PgP55FqBWijBPwT2Ihcay2S3dG8ahjRClm5bPYOHYvSMlgjo1CJTSsBnMRb_d-ZDCiVMzHon5-ebB3-3OL4prNKMOWYrAXcfbKgggIQVO8fvS2emtJ99rbOal5320paTrt9fCV9P_secqgFk7rW2PMj5M-HBIbm0zJm-JP3l05io5rNJw27c23fpHnrRslyHJ4NVI7230k" />
            </div>
            <div className={css.gridDiv}>
                <Card rota="/livro/alem-do-horizonte-juliano-mendes" genero="AVENTURA" titulo="Além do Horizonte" autor="Juliano Mendes" imagem="https://lh3.googleusercontent.com/aida-public/AB6AXuCSgr_vyBigWMwwVrRouBgS916W22Ws3OqI2rZhMRgoO6PX_iVW2VGAgmrJdorj4ffehQFjklPhZJ_Am7rHl0469VKQiz-HHNvRYxXzpq7vPG-BZGCWapyG2Lk8fkh-VKw-OSbk61Kfb8IJgBhilmM9KlPYlssH4z5oqAs985k4CdaupuonOrBFhzGow36ifDJVsx-vYdyogku1ag9FUwpi6WGyrKJdpgXpnN43ClCKAsSLXdKYT5ojtWLw5gNqi-hAauUdsg0NXKQR" />
                <Card genero="PSICOLOGIA" titulo="O Despertar da Mente" autor="Dra. Sônia Luz" imagem="https://lh3.googleusercontent.com/aida-public/AB6AXuDIrOniwwx7O8UYZpSiLJUgTJXhZna95wsoFrsm-nZTeLuJkMTHrgkmPvjcq1ZsrD5L_VsN-dig-V9df78pKgQflbtzZAS9x8xTuMWeMOlXQKdRiINMpABc62S6Yfm2Ne72hh4Z3eOoM2NTRKyvoGXXA-Cs2ttpKTnB3HiAk3lET2KeQ0Jry5uwO9LgDRuDWfNDJHdXCKJLru6YRxJIPdp1pLAa1Mw4F2pjW5va6Dby_ukqe6rY3yBOe6ToBV62BSJ72_QKPow_iOqE" />
                <Card genero="CONTOS" titulo="Fragmentos" autor="Carlos Eduardo" imagem="https://lh3.googleusercontent.com/aida-public/AB6AXuBL-p7VMFKMrJ3m2mgNbTHioDJnF--bq4fgkF2CMeH_ZlX5876uyFH0_SBCKuGWl0zGNM6QqQ6BudDR4njMloF7JX49DmXoonlUO0mMf7rTbxcZSDSLth-GKJw9C5rjkhb1NB4_Go1OJ9-MmEZckBFxD_JAfENWKZhavhiQw-ETy_lsD1lS1ioEwnP8MLTEc4Wb8TuaI4R7IBwkrUi-TPIEqh8oTj5OKvZBDUn9o5-YYUGusr6AgNmG8PrLMa24ACBs4PCWU_4rKTiI" />
                <Card genero="FICÇÃO" titulo="Luz e Sombra" autor="Patrícia Lima" imagem="https://lh3.googleusercontent.com/aida-public/AB6AXuCbecKio3xro7kgbDmdD5jUiNAkzgWcfTOjbZi7iWXl_fzEavnubnulN_POs4g-6qNfk6wMnQjQ0mO-k_XYG3U_LWGTmPlVzISCU776heCbx9zeFxvcTQqzj1trhylmNN_bzEvYadHW2LlCvxvEDjjQfMAfEjFsiSy7ZXyOGKDP4sI6ejnK7o8LefZzrqkm5xkRfwqmLpiI6UTat6AaESrl9MoJZt2VSlsNYPDHwSxxUJYkZ2d9RzpD3uVgZRfPoF4VZTMc1QbyOvo5" />
                <Card genero="BOTÂNICA" titulo="O Jardim Suspenso" autor="Mariana Rocha" imagem="https://lh3.googleusercontent.com/aida-public/AB6AXuCM3ZBORHmk162uKNaSa-WFyUxyw28GESaomS1hWZPyM_gAXj6_KJBCVWzm5VeltLEUk2HVBDCLLaR8hiN0s2Yypu2dQrLaEq_onPTi70tfQxrDPlN_HXVz1lufQrZmc75rZdshIccrcBMaUGl24yPQe9uUH1YvAK2I5ZikgqwUeEFOwlCG3h4qpkTOIPZsBqmoUMzpG7VVv4iJqnptVarRuirYRLW8choCFUnyrRu2hZQiQfNloFzxI9d99I5b0pfXwmt6DR88LRP2" />
            </div>

            <Botao estilo="botao" texto={textoBotao} rota={rotaBotao}/>
        </section>
    )
}