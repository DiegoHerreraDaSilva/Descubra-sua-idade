import { useState } from 'react'
import './App.css'

export default function App() {
  const [nome, setNome] = useState("");
  const [ano, setAno] = useState("");

  const [resultado, setResultado] = useState("");
  
  let anoNumber = Number(ano);
  let idade = 2025 - anoNumber ;


  return (
    <div className='container'>

      <h1 className='title'>Descubra sua idade</h1>

      <div className='box'>

        <p className='quest'>Digite seu nome:</p>
        <input 
        type="text" 
        placeholder='Digite seu nome' 
        className='nome-input' 
        
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        />

        <p className='quest'>Digite o ano que você nasceu:</p>
        <input type="number" 
        placeholder='Digite o ano' 
        className='nome-input' 
        
        value={ano}
        onChange={(e) => setAno(e.target.value)}
        />

        <button onClick={
          () => setResultado(nome + ", você tem: " + idade + " anos" )} 

          className='button'> Descobrir idade
          
        </button>

      </div>

    {resultado !== '' && <h2 className='resultado'>{resultado}</h2>} 
    
    </div>
  )
}