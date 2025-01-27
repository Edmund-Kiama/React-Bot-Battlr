import FilterBar from "../Components/FilterBar";
import SortBar from "../Components/SortBar";
import RobotCard from "../Components/RobotCard";
import Stats from "../Components/Stats";
import { useState } from "react";
import { useOutletContext } from "react-router-dom";

export default function BotCollection () {
    const { robots, handleRecruit,releaseFromDuty,selectedClass,setSelectedClass,sortBy,setSortBy} = useOutletContext()
    
    const [isShown, setIsShown] = useState(false)
    const [displayProfile, setDisplayProfile] = useState()
    //responsible for showing which data
    const displayProfiles = robots
        //for class
        .filter(robot => {
        if (selectedClass === "All") {
            return true
        }
        return selectedClass === robot.bot_class
        })
        //for sort
        .sort((robotA,robotB) => {
            if(sortBy === "health"){
                return robotB.health - robotA.health
            }else if(sortBy === "damage"){
                return robotB.damage - robotA.damage
            }else if(sortBy === "armor"){
                return robotB.armor - robotA.armor
            }
        })
        //for creating element
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

        //shows a pop-up for selected bot to its stats
  function showStat (robotData) {
    setIsShown(show=> !show)
    setDisplayProfile(robotData)
    }
  //goes back to bot collection from show stat pop-up
  function goBack () {
    setIsShown(show => !show)
    setDisplayProfile()
  }

    return (
        <>
         {isShown? <Stats robot={displayProfile} goBack={goBack} handleRecruit={handleRecruit}/> :  
     (
            <div className="bot-collection">
                <h1>BOT COLLECTION</h1>
                <div className="main-container">
                    <SortBar setSortBy={setSortBy} sortBy={sortBy}/>
                    <div className="container">
                        <FilterBar setSelectedClass={setSelectedClass} selectedClass={selectedClass}/>
                    </div>
                    <div className="container">
                        { displayProfiles }
                    </div>
                </div>
            </div>)}
        </>
    )
}