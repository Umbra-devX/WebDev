import styles from './Collection.module.css'
import { cards } from '../../data/cards'
import Card from '../FeaturedCard/Card'

const Collection = ()=>{
    return(
        <section className={styles.collection} id='Collection'>
            <div className={styles.sectionHeader}>
                <span>Featured Collection</span>
            </div>
            <div className={styles.cardContainer}>
                {cards.map((card)=>(
                    <Card cardImage={card.img} cardName={card.name} cardPrice={card.price}/>
                ))}
            </div>
            <hr />
        </section>
    )
}

export default Collection