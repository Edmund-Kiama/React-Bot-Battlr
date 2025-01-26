import { useState } from "react";
export default function BotCollection ({ robots, handleRecruit, showStat,releaseFromDuty }) {
    const [selectedClass, setSelectedClass] = useState("All")
    // const [display, setDisplay] = useState([])

    let classArr =[];
    robots.filter(robot => {
        if(!classArr.includes(robot.bot_class)){
        classArr.push(robot.bot_class)
    }})
    const display = robots.filter(robot => {
        if (selectedClass === "All") {
            return true
        }
        return selectedClass === robot.bot_class
    })
    const displayProfiles = display.map(robotData => {
        return (
          <div key={robotData.id} className="bot-container" >
            <div className="bot-header">
                <button className="recruit" onClick={() => handleRecruit(robotData)}>Recruit</button>
                <button className="bye-bye" onClick={() => releaseFromDuty(robotData)}>X</button>
            </div>
            <div onClick={()=>showStat(robotData)}>
                <img src={ robotData.avatar_url } alt="avatar"/>
                <p className="catchphrase">{ robotData.catchphrase }</p>
                <div className="bot-name-and-class-div">
                <h2><strong>{ robotData.name }</strong></h2>
                <h3>{ robotData.bot_class }</h3>
                </div>
            </div>
          </div>
        )
      })   

      function onClassChange (category) {
        setSelectedClass(category)
      }

    return (
        <div className="bot-collection">
            <h1>BOT PROFILES</h1>
            <div className="main-container">
                <label>
                    Search :
                    <select onChange={(e) => onClassChange(e.target.value)}>
                        <option value="All">All classes</option>
                        {classArr.map(classSet => {
                            return <option key={classSet} value={classSet}>{classSet}</option>
                        })}                      
                    </select>
                </label>
                <div className="container">
                    { displayProfiles }
                </div>
            </div>
        </div>
    )
}