import { useEffect, useState } from 'react'
import '../styles/Footer.css'

function Footer() {
    const [inputValue, setInputValue] = useState('')

    function checkEmail(value) {
        value.includes('@')
            ? setInputValue(value)
            : alert("Attention, il n'y a pas d'@, ceci n'est pas une adresse email valide.")
    }

    return (
        <footer className='lmj-footer'>
            <div className='lmj-footer-elem'>
                Pour les passionné·e·s de plantes 🌿🌱🌵
            </div>
            <div className='lmj-footer-elem'>Laissez-nous votre mail :
                <input
                    placeholder='Saisissez votre email'
                    type="text"
                    onChange={(e) => setInputValue(e.target.value)}
                    value={inputValue}
                    onBlur={(e) => checkEmail(e.target.value)} />
                <input type="submit" />
            </div>
        </footer>
    )
}

export default Footer