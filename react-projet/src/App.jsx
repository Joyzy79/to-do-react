/* eslint-disable react/jsx-key */
//sintaxe JSX
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import { v4 as uuid } from 'uuid';




function App() {
  const [list, setList] = useState([{ id: uuid(), task: 'Nada' }])
  const [inputTask, setInputTask] = useState('')

  function inputMudou(event) {
    // console.log(event.target.value)
    setInputTask(event.target.value)

    // console.log(list)
  }
  function clickBotao() {
    // console.log('Botão clicado')
    setList([...list, { id: uuid(), task: inputTask }])
  }
  //codigo JSX
  return (
    //retorna codigo html
    <div>
      <input onChange={inputMudou} placeholder="Oque tenho pra fazer..." />
      <button onClick={clickBotao}>Adicionar</button>
      <div>
        {list.map(item => (
          <li key={item.id}>{item.task}</li>
        ))}
      </div>

    </div>

  )
}

export default App
