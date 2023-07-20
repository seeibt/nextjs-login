import styles from './button.module.css'

export default function Button({children, ...props}){
    return(
            <div className={styles.width100}>
                <button className={styles.button} {...props}> {children} </button>
            </div>
    )
}