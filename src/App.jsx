import './App.css'
import Header from './components/Header.jsx'
import CardsView from './components/CardsView.jsx'
import { useState } from 'react'
import DetailView from './components/DetailView.jsx'
import AddPuppyForm from './components/AddPuppyForm.jsx'

const App = () => {
  const [selectedPuppy, setSelectedPuppy] = useState('');
  const [detailView, setDetailView] = useState(false);
  const [puppyList, setPuppyList] = useState([]);

  return (
    <>
      <Header />
      <AddPuppyForm />
      {!detailView? <CardsView puppyList={puppyList} setPuppyList={setPuppyList} setSelectedPuppy={setSelectedPuppy} setDetailView={setDetailView}/> 
      : 
      <DetailView puppyList={puppyList} selectedPuppy={selectedPuppy} setDetailView={setDetailView}/>}
    </>
  
  )
}

export default App
