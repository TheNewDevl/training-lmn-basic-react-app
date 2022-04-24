import { plantList } from '../datas/planList'
import PlantItem from './PlantItem'
import '../styles/ShoppingList.css'

export default function ShoppingList() {

    const categories = plantList.reduce(
        (acc, plant) => acc.includes(plant.category) ? acc : acc.concat(plant.category), []
    )

    return (
        <div className='lmj-shopping-list'>
            <ul>
                {categories.map((cat) => (
                    <li key={cat}>{cat}</li>
                ))}
            </ul>

            <ul className='lmj-plant-list'>
                {plantList.map(({ id, name, cover, light, water }) => (
                    <PlantItem
                        id={id}
                        name={name}
                        cover={cover}
                        light={light}
                        water={water}
                    />
                )
                )}
            </ul>
        </div>
    )
}


