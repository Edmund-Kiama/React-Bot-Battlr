import { useEffect,useState } from "react"
import BotCollection from "./Components/BotCollection"
import YourBotArmy from "./Components/YourBotArmy"
import Stats from "./Components/Stats"

function App() {
  const [robots, setRobots] = useState([])
  const [recruits, setRecruits] = useState([])
  const [isShown, setIsShown] = useState(false)
  const [displayProfile, setDisplayProfile] = useState()
  const [selectedClass, setSelectedClass] = useState("All")
  const [sortBy,setSortBy] =useState("None")

  useEffect(()=>{
    fetch('http://localhost:3000/bots')
    .then(r=>r.json())
    .then(robot=>setRobots(robot))
  },[robots])

  const handleRecruit = (newRecruit) => {
    //checks if it recruit exist in your army already
    const sameRecruit = recruits.find(recruit => recruit.id === newRecruit.id )
    //checks if there exist other recruit of same class
    const sameClass = recruits.find(recruit => recruit.bot_class === newRecruit.bot_class )

    //updates state by adding new recruit
    if (!sameRecruit && !sameClass) {
      setRecruits([
      ...recruits, newRecruit
      ])
    releaseFromDuty(newRecruit)
    }
    
    if (sameRecruit) {
      alert("Bot already exists in you army")
    }
    if (sameClass && !sameRecruit) {
      alert("A bot of similar class already exist. Please select a bot from another class")
    }
    
  }
 
  const handleReleaseRecruit = (releaseRecruit) => {
    //removes recruit from recruits 
    const updatedRecruits = recruits.filter(recruit => recruit.id !== releaseRecruit.id )
    //updates state
    setRecruits(updatedRecruits)
  }

  const releaseFromDuty = (releaseForeverBot) => {
    //deletes from the back
    fetch(`http://localhost:3000/bots/${releaseForeverBot.id}`,{
        method: "DELETE"
      })
  }

  function goBack () {
    setIsShown(show => !show)
    setDisplayProfile()
  }

  function showStat (robotData) {
    setIsShown(show=> !show)
    setDisplayProfile(robotData)
}

  return (
    <>
    {isShown? <Stats robot={displayProfile} goBack={goBack} handleRecruit={handleRecruit}/> :  
      (<>
        <YourBotArmy recruits={recruits} handleReleaseRecruit={handleReleaseRecruit}/>
        <BotCollection 
          showStat={showStat} 
          robots={robots} 
          handleRecruit={handleRecruit} 
          releaseFromDuty={releaseFromDuty}
          setSelectedClass={setSelectedClass}
          selectedClass={selectedClass}
          sortBy={sortBy}
          setSortBy={setSortBy}
        />
      </>)}
     
    </>
  )
}

export default App
