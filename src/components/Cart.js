import '../styles/Cart.css'
import { useState } from 'react'

export default function Cart() {
    const [cart, updateCart] = useState(0)
    const [isOpen, setIsOpen] = useState(false)

    const monsteraPrice = 8
    /* const ivyPrice = 10
    const flowerPrice = 15 */

    return (isOpen ? (
        <div className="lmj-cart">
            <button
                className='lmj-cart-toggle-button'
                onClick={() => setIsOpen(false)}>Fermer le panier</button>
            <h2>Panier</h2>
            <ul>
                <li>Monstera : {monsteraPrice}€</li>
                {/*  <li>Lierre : {ivyPrice}€</li>
                <li>Fleurs : {flowerPrice}€</li> */}
                <button onClick={() => updateCart(cart + 1)}>Ajouter</button>

            </ul>
            Total : {monsteraPrice * cart/*  + ivyPrice + flowerPrice */}€
            <button onClick={() => updateCart(0)}>Vider le panier</button>
        </div>
    ) : (
        <div className='lmj-cart-closed'>

            <button
                className='lmj-cart-toggle-button'
                onClick={() => setIsOpen(true)}>Ouvrir le panier</button>
        </div>
    )
    )

}
