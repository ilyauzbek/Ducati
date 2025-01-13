import React from 'react'
import './App.scss'
import Header from './components/Header/Header'
import Products from './components/Products/Products'
import { useAppContext } from './context'

const App = () => {

   const {isCard1, isCard2, toggleOpen1, toggleOpen2} = useAppContext()
  return (
    <>
    {isCard1 ? ( <Products  iamge={'/Moto1.png'}  price='120.890.000'  oldPrice='140.890.000'/>) : null}
    {isCard2 ? (<Products  iamge={'/Moto2.png'}  price='98.890.000'  oldPrice='109.890.000'/>) : null}
    
    <Header/>
    </>
  )
}

export default App