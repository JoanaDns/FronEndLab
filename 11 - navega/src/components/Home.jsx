import React from 'react'
import { useState } from 'react'

function Home() {

    const[resultado, sethome] = useState()

    function navegar(){

    }

  return (
     <div className="Home">
       <h3>Home</h3>
      {/* <button onClick={navegar}>Navegar na Web</button> */}
       {resultado}
    </div>
  )
}

export default Home
