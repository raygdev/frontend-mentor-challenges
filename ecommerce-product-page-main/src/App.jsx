import { useState } from 'react'
import { sneakerData } from './data'
import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Product from './components/Product/Product'

function App() {
  const [count, setCount] = useState(0)
  const [close, setClose] = useState(true)

  return (
    <>
      <Header close={close} setClose={setClose}/>
      <Product close={close} data={sneakerData}/>
      <Footer close={close}/>
    </>
  )
}

export default App
