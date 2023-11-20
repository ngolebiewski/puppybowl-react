import './App.css'
import Header from './components/Header.jsx'
import CardsView from './components/CardsView.jsx'
import { useState } from 'react'

const App = () => {
  const [selectedPuppy, setSelectedPuppy] = useState('');

  return (
    <>
      <Header />
      <CardsView setSelectedPuppy={setSelectedPuppy} />
    </>
  )
}

export default App
