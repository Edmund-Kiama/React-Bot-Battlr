export default function FilerBar ({setSelectedClass, robots}) {
    let classArr =[];

    robots.filter(robot => {
        if(!classArr.includes(robot.bot_class)){
        classArr.push(robot.bot_class)
    }})

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