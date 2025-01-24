import { useEffect,useState } from "react"
import BotCollection from "./components/BotCollection"

function App() {
  const [robots, setRobots] = useState([])
  useEffect(()=>{
    fetch('http://localhost:3000/bots')
    .then(r=>r.json())
    .then(robot=>setRobots(robot))
  },[])

  return (
    <>
      <div className="navbar">
        BotCollection
      </div>
      <BotCollection robots={robots}/>
    </>
  )
}

export default App
