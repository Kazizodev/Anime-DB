import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './Components/Landing'

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='*' element={<Landing />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
