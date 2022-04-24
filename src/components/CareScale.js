import Sun from '../assets/sun.svg'
import Water from '../assets/water.svg'

export default function CareScale(props) {
    const { scaleValue, careType } = props
    const range = [1, 2, 3]

    const scaleType = careType === 'water'
        ? <img src={Water} alt="Water icon" />
        : <img src={Sun} alt="Sun icon" />


    return (
        <div onClick={() => careClick(scaleValue, careType)}>
            {range.map((rangeValue) =>
                scaleValue >= rangeValue && <span key={rangeValue.toString()}>{scaleType}</span>
            )}
        </div>
    )
}

function careClick(scaleValue, careType) {
    let waterQuantity = '';
    if (scaleValue === 1) {
        waterQuantity = 'peu'
    } else if (scaleValue === 2) {
        waterQuantity = 'modérement'
    } else if (scaleValue === 3) {
        waterQuantity = 'beaucoup'
    }
    const type = careType === 'water' ? 'd\'arrosage' : 'de lumière'
    alert(`Cette plante requiert ${waterQuantity}  de ${type}`)

}