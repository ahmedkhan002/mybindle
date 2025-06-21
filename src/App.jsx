import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import Features from './components/Features'
import AboutApp from './components/AboutApp'
import InstallApp from './components/InstallApp'
import DonateSection from './components/DonateSection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <HeroSection />
    <Features />
    <AboutApp />
    <InstallApp />
    <DonateSection />
    </>
  )
}

export default App
