import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
   <div className='container'>

    <div className="image">
    <p>Hey <br/> Dr. Aditi <br/>  I Love you 💕😍 </p>
      <img src="
      https://scontent.fixc2-2.fna.fbcdn.net/v/t39.30808-1/301776618_493356106131206_5910119610534176067_n.jpg?stp=dst-jpg_p200x200&_nc_cat=104&ccb=1-7&_nc_sid=f4b9fd&_nc_ohc=cB0RWPNAF5kQ7kNvgGvZkYq&_nc_ht=scontent.fixc2-2.fna&oh=00_AYDRUm74WliggQpJX6XgyX3ikmqzDFiJuTjUDJFxFHMNQw&oe=66A44423" alt="" />
    </div>
    <p style={{color:"white",fontWeight:"500",paddingTop:"15px"}}>Made by Laksh WITH LOVE</p>
   </div>

    </>
  )
}

export default App
