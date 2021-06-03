import React from 'react'
import styles from './login.module.css'
import { Link } from 'react-router-dom';
function Login() {
    return (
        <div>
            <div class={styles.main}>
                <p class={styles.sign} align="center">Sign in</p>
                <form class={styles.form1}>
                    <input class= {styles.un} type="text" align="center" placeholder="Username" />
                    <input class={styles.pass} type="password" align="center" placeholder="Password"/>
                    <a class={styles.submit} align="center" href="/">Sign in</a>
                    <p class={styles.forgot} align="center" ><a href="/">Forgot Password?</a></p>
                    <p class= {styles.forgot} align="center">
                        <Link to="/signup">
                            Signup
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    )
}

export default Login
