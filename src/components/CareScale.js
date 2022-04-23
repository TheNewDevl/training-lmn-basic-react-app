import Sun from '../assets/sun.svg'
import Water from '../assets/water.svg'

export default function CareScale(props) {
    const { scaleValue, careType } = props
    const range = [1, 2, 3]

    const scaleType = careType === 'water'
        ? <img src={Water} alt="Water icon" />
        : <img src={Sun} alt="Sun icon" />


    return (
        <div>
            {range.map((rangeValue) =>
                scaleValue >= rangeValue && <span key={rangeValue.toString()}>{scaleType}</span>
            )}
        </div>
    )
}