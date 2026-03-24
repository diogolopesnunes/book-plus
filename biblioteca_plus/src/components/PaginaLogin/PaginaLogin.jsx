import css from './PaginaLogin.module.css';
import {Link, useNavigate} from "react-router-dom";
import {useEffect, useState} from 'react'
import Botao from "../Botao/Botao.jsx";

export default function PaginaLogin() {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [alerta, setAlerta] = useState('')

    const navigate = useNavigate();
    const logado = localStorage.getItem("token");

    async function realizarLogin(e) {

        e.preventDefault();

        let retorno = await fetch('https://apps-api-livros.ucxocw.easypanel.host/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            },
            body: JSON.stringify({
                email: email,
                senha: senha,
            })
        })

        retorno = await retorno.json();
        console.log(retorno)

        if (retorno.token && logado === null) {
            setAlerta("Login realizado com sucesso")

            // SALVAR
            localStorage.setItem('token', retorno.token)
            localStorage.setItem('usuario_nome', retorno.usuario.nome)
            localStorage.setItem('usuario_email', retorno.usuario.email)
            localStorage.setItem('usuario_id', retorno.usuario.id)

            setTimeout(() => navigate('/dashboard'), 2000)

        } else if (logado !== null) {
            setAlerta("Você já está logado. Redirecionando para dashboard")
            setTimeout(() => navigate('/dashboard'), 2000)
        } else {
            setAlerta("E-mail ou senha estão incorretos")
    }
    }

    useEffect(function() {

        let token = localStorage.getItem('token')

        if (token) {
            let nome = localStorage.getItem('usuario_nome')
            setAlerta('Olá, ' + nome + ' você já está logado.')
        }
    }, [])

    return (
        <div className={css.login}>
            {alerta && <p className={css.alerta} key={alerta}>{alerta}</p>}
            <form className={css.formulario} onSubmit={realizarLogin}>
                <div>
                    <h2 className={css.formularioTitulo}>Login</h2>
                </div>

                <div>
                    <label className={css.label}>Email</label>
                    <input className={css.input} value={email} type="email" id="email" onChange={(e) => setEmail(e.target.value)}/>
                </div>

                <div>
                    <label className={css.label}>Senha</label>
                    <input className={css.input} value={senha} type="password" id="senha" onChange={(e) => setSenha(e.target.value)}/>
                </div>

                <Link to="/cadastro">Ainda não tenho conta</Link>

                <Botao tipo="submit" texto="Logar" cor="primary-color" hover="semHover" estilo="botaoCheio" altura="baixo"/>
            </form>
        </div>
    )
}