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
                    <li key={`${plant}-${index}`}>{plant.name} {plant.isBestSale && <span>🔥</span>}
                    </li>
                ))}
            </ul>
        </div>

    )
}