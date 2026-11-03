import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './layouts/Header'
import ProductList from './products/ProductList'
import ProductProvider from './context/ProductProvider'
import ProductDetail from './products/ProductDetail'

function App() {

  return (
    <ProductProvider>
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path='/product/:id' element={<ProductDetail />} />
          </Routes>
        </main>
      </BrowserRouter>
    </ProductProvider>
  )
}

export default App
