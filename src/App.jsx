import './App.css'
import Header from './components/Header.jsx'
import CardsView from './components/CardsView.jsx'
import { useState } from 'react'
import DetailView from './components/DetailView.jsx'

const App = () => {
  const [selectedPuppy, setSelectedPuppy] = useState('');
  const [detailView, setDetailView] = useState(false)

  return (
    <>
      <Header />
      {!detailView? <CardsView setSelectedPuppy={setSelectedPuppy} setDetailView={setDetailView}/> 
      : 
      <DetailView selectedPuppy={selectedPuppy} setDetailView={setDetailView}/>}
    </>
  
  )
}

export default App
