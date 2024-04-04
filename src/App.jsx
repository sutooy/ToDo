// import reactLogo from '/assets/react.svg'
// import viteLogo from '/assets/vite.svg'
import { useEffect } from 'react';
import './App.css'
import Index from './pages/ToDo'
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init();
  }, [])


  return (
    <>
      <Index />
    </ >
  )
}

export default App
