import { useEffect,useState } from "react"
function App() {
  const [rob, setRob] = useState([])
  useEffect(()=>{
    fetch('http://localhost:3000/bots')
    .then(r=>r.json())
    .then(data=>setRob(data))
  },[])
  return (
    <>
      {rob.map(dat=> <p>{dat.name}</p>)}
    </>
  )
}

export default App
