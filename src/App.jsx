import { useEffect,useState } from "react"
import NavBar from "./Components/NavBar"
import { Outlet } from "react-router-dom"

function App() {
  const [robots, setRobots] = useState([])
  const [recruits, setRecruits] = useState([])
  const [selectedClass, setSelectedClass] = useState("All")
  const [sortBy,setSortBy] =useState("None")

  //get fetch from json server
  useEffect(()=>{
    fetch('http://localhost:3000/bots')
    .then(r=>r.json())
    .then(robot=>setRobots(robot))
  },[robots])

  //adds bot to army
  const handleRecruit = (newRecruit) => {
    //checks if it recruit exist in your army already
    const sameRecruit = recruits.find(recruit => recruit.id === newRecruit.id )
    //checks if there exist other recruit of same class
    const sameClass = recruits.find(recruit => recruit.bot_class === newRecruit.bot_class )

    //updates state by adding new recruit
    if (!sameRecruit && !sameClass) {
      //adds bot to your army
      setRecruits([
      ...recruits, newRecruit
      ])
    //removes bot fom bot collection
    releaseFromDuty(newRecruit)
    }

    //alerts for users
    if (sameRecruit) {
      alert("Bot already exists in you army")
    }
    if (sameClass && !sameRecruit) {
      alert("A bot of similar class already exist. Please select a bot from another class")
    }
  }
 
  //removes bots from your army
  const handleReleaseRecruit = (releaseRecruit) => {
    //removes recruit from recruits 
    const updatedRecruits = recruits.filter(recruit => recruit.id !== releaseRecruit.id )
    //updates state
    setRecruits(updatedRecruits)
  }

  //removes bot from bot collection permanently
  const releaseFromDuty = (releaseForeverBot) => {
    //deletes from the back
    fetch(`http://localhost:3000/bots/${releaseForeverBot.id}`,{
        method: "DELETE"
      })
  }

  return (
    <div className="container">
      <NavBar />
     
      <Outlet 
        context={{
          recruits,
          handleRecruit,
          handleReleaseRecruit,
          robots,
          releaseFromDuty,
          selectedClass,
          setSelectedClass,
          sortBy,
          setSortBy
        }}
      />

    </div>
  )
}

export default App
