export default function FilerBar ({setSelectedClass, selectedClass}) {
    //classes to select from
    let classArr =["Support", "Medic", "Assault", "Defender", "Captain", "Witch"];

    //called when different option is called
    function onClassChange (category) {
        setSelectedClass(category)
      }

    return (
        <label className="class-label">
                Search By Class 
                <select onChange={(e) => onClassChange(e.target.value)}>
                    <option value={selectedClass}>{selectedClass}</option>
                    <option value="All">All</option>
                    {classArr.map(classSet => {
                        return <option key={classSet} value={classSet}>{classSet}</option>
                    })}                      
            </select>
        </label>
    )
}