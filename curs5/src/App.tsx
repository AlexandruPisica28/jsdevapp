import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Salut from './components/Salut';
import Masina from './components/Masina';
import Form from './components/Form';
import MyForm from './components/MyForms';

function App() {
  const [count, setCount] = useState(0);
const carInfo = { name: "Ford", model: "Mustang" };
const obj = { name: 'Alice', email: 'demo@demo.com', password: '123456', car: 'BMW', message: 'Salut' };
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
        <p>
          Car Info: {carInfo.name} {carInfo.model}
        </p>
         <Salut nume = "Ana"  curs='React'/>
         <Salut nume = "Dan" />
         <Masina car={carInfo} />
      </div>
         <h1> Frmular de inregistrare</h1>
    <Form />
    <MyForm {...obj}/>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
