//import { useState } from 'react'

import './App.css'
import Form from './components/Form';
import Masina from './components/Masina'
import MyForm from './components/MyForm';
import Salut from './components/Salut'

function App() {
 const carInfo = { name: "Ford", model: "Mustang" };
const obj = { name: 'Alice', email: 'demo@demo.com', password: '123456', car: 'BMW', message: 'Salut' };

  return (
    <>
      <Salut nume={'Ion'} curs={123}/>
      <Salut nume='Dan' />
      <Salut nume='Ana'/>

     <Masina car={carInfo} />

     <Form />
       <MyForm {...obj}/>
    </>
  )
}

export default App
