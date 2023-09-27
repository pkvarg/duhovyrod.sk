import Home from './Home'
import Footer from './components/Footer'
import Counter from './Counter'
import ScrollToTop from './components/ScrollToTop'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />

          <Route path='/counter' element={<Counter />} />
        </Routes>
        <ScrollToTop />
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App
