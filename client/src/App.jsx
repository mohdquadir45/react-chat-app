
// import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Chat from './components/Chat';
import Join from './components/Join';
const App = () => {
  return (
    <>
      <Router>
        <Routes>
        <Route path='/' exact Component={Join} />
        <Route path='/chat' Component={Chat}/>
        </Routes>
    </Router>
    </>
  )
}

export default App
