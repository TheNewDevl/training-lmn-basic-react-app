import { plantList } from '../datas/planList'
import '../styles/ShoppingList.css'

export default function ShoppingList() {

    const categories = plantList.reduce(
        (acc, plant) => acc.includes(plant.category) ? acc : acc.concat(plant.category), []
    )
    console.log(categories);
    return (
        <div>
            <ul>
                {categories.map((cat) => (
                    <li key={cat}>{cat}</li>
                ))}
            </ul>

            <ul className='lmj-plant-list'>
                {plantList.map((plant, index) => (
                    <li className='lmj-plant-item' key={`${plant}-${index}`}>
                        {plant.name}
                        {plant.isSpecialOffer && <div className='lmj-sales'>Soldes</div>}
                    </li>
                ))}
            </ul>
        </div>

    )
}