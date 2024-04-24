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
        <input className='form-control' type="number" name="peso" value={peso} id="peso" onChange={(e) => { setPeso(e.target.value) }} /> <br />

        <label htmlFor="altura">Altura: </label>
        <input className='form-control' type="number" name="altura" value={altura} id="altura" onChange={(e) => { setAltura(e.target.value) }} /> <br />

        <input className='btn btn-primary' type='button' value='Calcular IMC' onClick={calcular} /> <br />

        <b>Seu IMC: </b> {resultado.toFixed(2)}

      </form> <br />

      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Classificação</th>
            <th scope="col">IMC</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Abaixo do Peso</td>
            <td>Abaixo de 18,5</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Peso Normal</td>
            <td>Entre 18,5 e 24,9</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td colSpan="1">Sobre Peso</td>
            <td>Entre 25 e 29,9</td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td colSpan="1">Obesidade Grau I</td>
            <td>Entre 30 e 34,9 </td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td colSpan="1">Obesidade Grau II</td>
            <td>Entre 35 e 39,9</td>
          </tr>
          <tr>
            <th scope="row">6</th>
            <td colSpan="1">Obesidade Grau III ou Mórbida</td>
            <td>Maior que 40</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default App
