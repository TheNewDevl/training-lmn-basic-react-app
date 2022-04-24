function Categories({ categories, catState, updateCatState }) {

    function handleCategory(value) {

        updateCatState(value)
    }
    console.log(catState);
    return (
        <div>

            <select onChange={(e) => handleCategory(e.target.value)} name="Categories" id="">
                <option value="">Catégorie</option>
                {categories.map((cat, index) => (
                    <option key={cat + "-" + index} value={cat}>{cat}</option>
                ))}
            </select>
            <button onClick={() => updateCatState('')}>Réinitialiser</button>

        </div>
    )
}

export default Categories