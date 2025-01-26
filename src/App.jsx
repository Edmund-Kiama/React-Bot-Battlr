import { useEffect,useState } from "react"
import BotCollection from "./Components/BotCollection"
import YourBotArmy from "./Components/YourBotArmy"
import Stats from "./Components/Stats"

function App() {
  const [robots, setRobots] = useState([])
  const [recruits, setRecruits] = useState([])
  const [isShown, setIsShown] = useState(false)
  const [displayProfile, setDisplayProfile] = useState()

  useEffect(()=>{
    fetch('http://localhost:3000/bots')
    .then(r=>r.json())
    .then(robot=>setRobots(robot))
  },[robots])

  const handleRecruit = (newRecruit) => {
    //checks if it recruit exist in your army already
    const toAddOnlyOne = recruits.find(recruit => recruit.id === newRecruit.id )
    //updates state by adding new recruit
    if (!toAddOnlyOne) {
      setRecruits([
      ...recruits, newRecruit
    ])
  }
    releaseFromDuty(newRecruit)
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
        <BotCollection showStat={showStat} robots={robots} handleRecruit={handleRecruit} releaseFromDuty={releaseFromDuty}/>
      </>)}
     
    </>
  )
}

export default App
