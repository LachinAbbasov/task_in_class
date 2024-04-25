import { useState } from 'react'
import './App.css'
import Form from './components/Form'
import Cards from './components/Cards'
import cards from './Data/data'

function App() {
  const [myCards, setMyCards] = useState(cards)
  const cardDelete = (id) => {
    const updatedCards = myCards.filter(cards => cards.id !== id);
    setMyCards(updatedCards);
  };

  return (
    <>
      <Form/>
      <Cards myCards={myCards} onDelete={cardDelete}/>

    </>
  )
}

export default App
