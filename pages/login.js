import LoginCard from "../src/components/loginCard/loginCard"
import Link from "next/link"
import Input from "../src/components/input/input"
import Button from "../src/components/button/button"

import styles from '../styles/Login.module.css'

export default function LoginPage(){
    return (
            <div className={styles.background}>
                <LoginCard title="Entre em sua conta!">
                    <form className={styles.form}>
                        <Input type="email" placeholder="E-mail" />
                        <Input type="password" placeholder="Senha" />
                        <Button>Entrar</Button>
                        <Link href="/cadastro">
                           Não tem uma conta? Cadastre-se!
                        </Link>
                    </form>
                </LoginCard>
            </div>
    )
}