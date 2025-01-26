import FilterBar from "./FilterBar";
import SortBar from "./SortBar";
import RobotCard from "./RobotCard";

export default function BotCollection ({ robots, handleRecruit, showStat,releaseFromDuty,selectedClass,setSelectedClass,sortBy,setSortBy }) {
    const displayProfiles = robots
        .filter(robot => {
        if (selectedClass === "All") {
            return true
        }
        return selectedClass === robot.bot_class
        })
        .sort((robotA,robotB) => {
            if(sortBy === "health"){
                return robotB.health - robotA.health
            }else if(sortBy === "damage"){
                return robotB.damage - robotA.damage
            }else if(sortBy === "armor"){
                return robotB.armor - robotA.armor
            }
        })
        .map(robotData => {
        return (
          <RobotCard  
            key={robotData.id}  
            robotData={robotData}
            handleRecruit={handleRecruit}
            releaseFromDuty={releaseFromDuty}
            showStat={showStat}
            />
        )
      })   

    return (
        <div className="bot-collection">
            <h1>BOT PROFILES</h1>
            <div className="main-container">
                <SortBar setSortBy={setSortBy} sortBy={sortBy}/>
                <div className="container">
                    <FilterBar setSelectedClass={setSelectedClass} selectedClass={selectedClass}/>
                </div>
                <div className="container">
                    { displayProfiles }
                </div>
            </div>
        </div>
    )
}