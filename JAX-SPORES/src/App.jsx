import { Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home.jsx'
import Shop from './pages/shop/Shop.jsx'
import ProductPage from './pages/ProductPage/ProductPage.jsx'
import Oops from './components/ui/Oops/Oops.jsx'
import ScrollToTop from './components/ui/scrollToTop/scrollToTop.jsx'

const App = () => {
  return (
    <>
    <ScrollToTop />
    <Routes>
      <Route index element={<Home />} />
      <Route path='/shop' element={<Shop />} />
      <Route path='/shop/:id' element={<ProductPage />}/>
      <Route path='/oops' element={<Oops/>}/>
    </Routes>
    </>
  )
}

export default App