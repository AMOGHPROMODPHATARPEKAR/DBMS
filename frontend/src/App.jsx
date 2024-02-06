import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <>
      <div className=' min-h-screen bg-gray-700 flex flex-wrap content-between'>
      <div className=' w-full block'>
      <Header/>
      <main className=' h-[80vh] '>
       <Outlet/>
      </main>
      <Footer/>
      </div>
    </div>
    </>
        
    </>
  )
}

export default App
