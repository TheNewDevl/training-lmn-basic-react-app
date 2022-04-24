import '../styles/Cart.css'
import { useState } from 'react'

export default function Cart({ cart, updateCart }) {
    const [isOpen, setIsOpen] = useState(false)

    let sum = 0
    const total = cart.forEach(element => {
        sum += element.price * element.quantity
    });

    return (isOpen ? (
        <div className="lmj-cart">
            <button
                className='lmj-cart-toggle-button'
                onClick={() => setIsOpen(false)}>Fermer</button>
            <h2>Panier</h2>

            {cart.map(({ name, price, quantity }, index) => (
                <div key={`${name}-$${index}`}>
                    {name}, {price}€ X {quantity}
                </div>

            ))}


            Total :    {sum}      €
            <button onClick={() => updateCart([])}>Vider le panier</button>
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
