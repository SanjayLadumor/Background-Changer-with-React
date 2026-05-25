import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import './index.css'
import Navbar from './components/Navbar'
import Background from './components/Background'
import Textdisplay from './components/Texts'

function App() {
  const [Count, setCount] = useState(0);

  let url = [
    "https://assets.gqindia.com/photos/5ea015f422867b000896081e/16:9/w_2560%2Cc_limit/Earth%2520Day-Electric%2520Cars.jpg",
    "https://www.supercars.net/blog/wp-content/uploads/2023/07/Rimac-Nevera.jpg",
    "https://i.cdn.newsbytesapp.com/images/14222051717566278.jpg"
  ]

  const [Playtext, setPlaytext] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setCount((Playtext) => { return Playtext === 2 ? 0 : Playtext + 1 })
      setPlaytext((Count) => { return Count === 2 ? 0 : Count + 1 })
    }, 3000);
  }, [])

  return (
    <>
      <div className="main w-full h-screen overflow-hidden">
        <Navbar />
        <Background Count={Count} className='w-full h-full' />
        <Textdisplay Playtext={Playtext} />
        <div className="threedots absolute top-110 left-6 text-white max-sm:top-180 max-sm:left-2">
          <button onClick={() => { setCount(0), setPlaytext(0) }} className={Playtext === 0 ? "text-orange-500" : "text-white"}>
            <span className='cursor-pointer text-7xl'>•</span>
          </button>
          <button onClick={() => { setCount(1), setPlaytext(1) }} className={Playtext === 1 ? "text-orange-500" : "text-white"}>
            <span className='cursor-pointer text-7xl'>•</span>
          </button>
          <button onClick={() => { setCount(2), setPlaytext(2) }} className={Playtext === 2 ? "text-orange-500" : "text-white"}>
            <span className='cursor-pointer text-7xl'>•</span>
          </button>
        </div>
      </div>
    </>
  )
}

export default App
