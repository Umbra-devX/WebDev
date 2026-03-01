import styles from './Card.module.css'

const Card = (props)=>{
    const {cardImage, cardName, cardPrice} = props
    return(
        <div className={styles.Card}>
            <div className={styles.imageContainer}>
                <img src={cardImage} className={styles.cardImage} />
            </div>
            <div className={styles.cardDetails}>
                <span className={styles.cardName}>{cardName}</span>
                <span className={styles.cardPrice}> ₦{cardPrice}</span>
            </div>
                <a href="https://wa.me/2348037620132" className={styles.ctaWhatsapp}>Order via Whatsapp</a>
        </div>
    )
}


export default Card
