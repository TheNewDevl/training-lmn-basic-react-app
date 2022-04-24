import { plantList } from '../datas/planList'
import Categories from './Categories'
import PlantItem from './PlantItem'
import '../styles/ShoppingList.css'
import { useState } from 'react'
export default function ShoppingList({ cart, updateCart }) {

    const categories = plantList.reduce(
        (acc, plant) => acc.includes(plant.category) ? acc : acc.concat(plant.category), []
    )

    function addToCart(name, price) {
        const plantToAdd = cart.find((plant) => plant.name === name)
        if (plantToAdd) {
            const filterCart = cart.filter((p) => p.name !== name)
            updateCart([...filterCart, { name, price, quantity: plantToAdd.quantity + 1 }])
        } else {
            updateCart([...cart, { name, price, quantity: 1 }])
        }
    }

    const [catState, updateCatState] = useState('')
    console.log(catState);

    const filtered = catState ? plantList.filter((p) => p.category === catState) : plantList

    console.log(filtered);

    return (
        <div className='lmj-shopping-list'>
            <Categories categories={categories} catState={catState} updateCatState={updateCatState} />


            <ul className='lmj-plant-list'>
                {filtered.map(({ id, name, cover, light, water, price }) => (
                    <div key={id}>

                        <PlantItem
                            id={id}
                            name={name}
                            cover={cover}
                            light={light}
                            water={water}
                        />
                        <button onClick={() => addToCart(name, price)}>Ajouter au panier</button>
                    </div>
                )
                )}
            </ul>


        </div>
    )
}


