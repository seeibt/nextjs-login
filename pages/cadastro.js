import LoginCard from "../src/components/loginCard/loginCard"
import Input from "../src/components/input/input"
import Button from "../src/components/button/button"
import Link from "next/link"


import styles from '../styles/Login.module.css'

export default function CadastroPage(){
    return (
            <div className={styles.background}>
                <LoginCard title="Crie sua conta!">
                    <form className={styles.form}>
                        <Input type="text" placeholder="Nome" />
                        <Input type="email" placeholder="E-mail" />
                        <Input type="password" placeholder="Senha" />
                        <Button>Cadastrar</Button>
                        <Link href="/cadastro">
                           Já tem uma conta? Faça login!
                        </Link>
                    </form>
                </LoginCard>
            </div>
    )
}