export default function FilerBar ({setSelectedClass}) {
    
    let classArr =["Support", "Medic", "Assault", "Defender", "Captain", "Witch"];

    function onClassChange (category) {
        setSelectedClass(category)
      }
    return (
        <label>
                Search :
                <select onChange={(e) => onClassChange(e.target.value)}>
                    <option value="All">All classes</option>
                    {classArr.map(classSet => {
                        return <option key={classSet} value={classSet}>{classSet}</option>
                    })}                      
            </select>
        </label>
    )
}