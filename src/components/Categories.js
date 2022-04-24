import '../styles/Categories.css'
function Categories({ categories, catState, updateCatState }) {



    return (
        <div className='lmj-categories'>

            <select
                value={catState}
                onChange={(e) => updateCatState(e.target.value)}
                className='lmj-categories-select'
            >
                <option value="">---</option>
                {categories.map((cat, index) => (
                    <option key={cat + "-" + index} value={cat}>{cat}</option>
                ))}
            </select>
            <button onClick={() => updateCatState('')}>Réinitialiser</button>

        </div>
    )
}

export default Categories