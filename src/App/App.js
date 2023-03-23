import './App.scss'
import { useDispatch, useSelector } from 'react-redux'

import Header from '../Header/Header.js'
import Main from '../Main/Main'
import { fetchSearchId, fetchTickets } from '../asyncActions/tickets'

function App() {
  const dispatch = useDispatch()
  const searchId = useSelector((state) => state.searchId)
  const tickets = useSelector((state) => state.data.tickets)
  if (searchId === '') {
    dispatch(fetchSearchId())
  } else if (tickets.length === 0) {
    dispatch(fetchTickets(searchId))
  }

  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  )
}

export default App
