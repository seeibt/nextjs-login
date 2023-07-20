import styles from './input.module.css'

export default function Input(props){
    return(
            <div className={styles.width100}>
                <input className={styles.input} {...props} />
            </div>
    )
}