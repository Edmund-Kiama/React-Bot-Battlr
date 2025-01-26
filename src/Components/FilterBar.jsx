export default function FilerBar ({setSelectedClass, selectedClass}) {
    
    let classArr =["Support", "Medic", "Assault", "Defender", "Captain", "Witch"];

    function onClassChange (category) {
        setSelectedClass(category)
      }
    return (
        <label className="class-label">
                Search By Class 
                <select onChange={(e) => onClassChange(e.target.value)}>
                    <option value={selectedClass}>{selectedClass}</option>
                    {classArr.map(classSet => {
                        return <option key={classSet} value={classSet}>{classSet}</option>
                    })}                      
            </select>
        </label>
    )
}