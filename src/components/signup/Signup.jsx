import React from 'react'
import styles from '../login/login.module.css'
import {Link} from 'react-router-dom'
function Signup() {
    return (
        <div>
             <div class={styles.mainSignup}>
                <p class={styles.sign} align="center">Sign up</p>
                <form class={styles.form1}>
                    <input class= {styles.un} type="text" align="center" placeholder="Name" />
                    <input class= {styles.un} type="text" align="center" placeholder="Username" />
                    <input class= {styles.un} type="email" align="center" placeholder="Email" />
                    <input class={styles.pass} type="password" align="center" placeholder="Password"/>
                    <a class={styles.submit} align="center" href="/">Sign up</a>
                    <p class= {styles.forgot} align="center">
                        <Link to="/">Sign in</Link>    
                    </p>
                </form>
            </div> 
        </div>
    )
}

export default Signup
