import { useEffect,useState } from "react"
import BotCollection from "./components/BotCollection"
import NavBar from "./components/NavBar"
import YourBotArmy from "./components/YourBotArmy"

function App() {
  const [robots, setRobots] = useState([])
  const [recruits, setRecruits] = useState([])

  useEffect(()=>{
    fetch('http://localhost:3000/bots')
    .then(r=>r.json())
    .then(robot=>setRobots(robot))
  },[])

  const handleRecruit = (newRecruit) => {
    //checks if it recruit exist in your army already
    const toAddOnlyOne = recruits.find(recruit => recruit.id === newRecruit.id )
    //updates state by adding new recruit
    if (!toAddOnlyOne) {
      setRecruits([
      ...recruits, newRecruit
    ])
    }
    
  }
 
  const handleReleaseRecruit = (releaseRecruit) => {
    //removes recruit from recruits 
    const updatedRecruits = recruits.filter(recruit => recruit.id !== releaseRecruit.id )
    //updates state
    setRecruits(updatedRecruits)
  }

  return (
    <>
      <NavBar /> 
      <YourBotArmy recruits={recruits} handleReleaseRecruit={handleReleaseRecruit}/>
      <BotCollection robots={robots} handleRecruit={handleRecruit}/>
    </>
  )
}

export default App
