import './App.css'
import Navbar from "./components/navigation/Navbar"
import Mobile_Menu from './components/navigation/Mobile_Menu'
import Main_Head from './components/Head-Section/Main_Head'
import Main_Results from './components/Results-Section/Main_Results'
import Main_About from './components/About-Section/Main_About'
import Main_Modal from './components/modals/Main_Modal'
import Thank_You_Modal from './components/modals/Thank_You_Modal'
import { useBodyScrollLock } from './hooks/useBodyScrollLock'
import { LogicProvider } from './context/LogicContext'
import { useState } from 'react'

function App() {
  const [menuIsOpen, setMenuIsOpen] = useState(false)

  function openClose_MobileMenu() {
    setMenuIsOpen(!menuIsOpen);
  }

  useBodyScrollLock(menuIsOpen)

  const mainCardStyles = "max-w-[730px] w-full bg-white rounded-md border-[1px] sm:p-12 pl-6 pr-6 pt-12 pb-12"

  return (
    <>
      <main className={`${menuIsOpen === true ? "overflow-hidden" : ""} min-h-screen`}>
        <Navbar
          openClose_MobileMenu={openClose_MobileMenu}
          menuIsOpen={menuIsOpen}
        />
        <Mobile_Menu
          menuIsOpen={menuIsOpen}
        />
        <LogicProvider>
          <Main_Modal
            mainCardStyles={mainCardStyles}
          />
          <Thank_You_Modal />
          <div className='grid gap-6 justify-items-center relative z-30 top-[-90px] lg:pl-32 sm:pl-14 pl-6 lg:pr-32 sm:pr-14 pr-6'>
            <Main_Head
              mainCardStyles={mainCardStyles}
            />
            <Main_Results
              mainCardStyles={mainCardStyles}
            />
            <Main_About
              mainCardStyles={mainCardStyles}
            />
          </div>
        </LogicProvider>
      </main>
    </>
  )
}

export default App
