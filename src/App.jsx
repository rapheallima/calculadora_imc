import React, { useState } from 'react';

function App() {

  const [peso, setPeso] = useState(0)
  const [altura, setAltura] = useState(0)
  const [resultado, setResultado] = useState(0)

  const calcular = (e) => {
    let calc;
    calc = peso / (altura * altura);
    setResultado(calc);
  }


  return (
    <div className='container'>
      <h1>Calculadora de IMC</h1>
      <form className='form'>
        <label htmlFor="peso">Peso: </label>
        <input type="number" name="peso" value={peso} id="peso" onChange={(e) => { setPeso(e.target.value) }} /> <br />

        <label htmlFor="altura">Altura: </label>
        <input type="number" name="altura" value={altura} id="altura" onChange={(e) => { setAltura(e.target.value) }} /> <br />

        <input className='btn' type='button' value='Calcular IMC' onClick={calcular} /> <br />

        <b>Seu IMC: </b> {resultado.toFixed(2)}

      </form> <br />

      <table border='1' style={{ borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th className='classe'>
              Classificação
            </th>
            <th className='imc'>
              IMC
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='classe'>Abaixo do Peso</td>
            <td className='imc'>Abaixo de 18,5</td>
          </tr>
          <tr>
            <td className='alt classe'>Peso Normal</td>
            <td className='alt imc'>Entre 18,5 e 24,9</td>
          </tr>
          <tr>
            <td className='classe'>Sobre Peso</td>
            <td className='imc'>Entre 25 e 29,9</td>
          </tr>
          <tr>
            <td className='alt classe'>Obesidade Grau I</td>
            <td className='alt imc'>Entre 30 e 34,9</td>
          </tr>
          <tr>
            <td className='classe'>Obesidade Grau II</td>
            <td className='imc'>Entre 35 e 39,9</td>
          </tr>
          <tr>
            <td className='alt classe'>Obesidade Grau III ou Mórbida</td>
            <td className='alt imc'>Maior que 40</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default App
