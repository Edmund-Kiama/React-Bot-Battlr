export default function SortBar ({setSortBy,sortBy}) {
    function onClassChange (category) {
        setSortBy(category)
      }
    return (
        <div className="container">
            <label className="sort-label">
                Sort By 
                <select onChange={(e) => onClassChange(e.target.value)}>
                    <option value={sortBy}>{sortBy}</option>
                    <option value="health">Health</option>
                    <option value="damage">Damage</option>
                    <option value="armor">Armor</option>                    
                </select>
            </label>
        </div>
    )
}