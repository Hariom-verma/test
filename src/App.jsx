import React, { useState } from 'react'
import Create from './component/Create'
import Show from './component/Show'


const App = () => {
  const [feedback, setfeedback] = useState(JSON.parse(localStorage.getItem("feedback"))|| [])
  return (
    <div>
      <Create feedback={feedback} setfeedback= {setfeedback} />
      <br />
      <br />
    <Show feedback={feedback} setfeedback= {setfeedback} />


    </div>
  )
}

export default App