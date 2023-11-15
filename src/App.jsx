import { useEffect, useState } from "react"

import './styles/style.css'
import styles from './styles/title.module.css'

const tarefas = [
  { id: 1, title: 'minha primeira tarefa' },
  { id: 2, title: 'minha segunda tarefa' },
  { id: 3, title: 'minha terceira tarefa' },
  { id: 4, title: 'minha quarta tarefa' },
]

export default function App() {

  //utilizando useState para atualizar uma lista
  const [tarefas, setTarefas] = useState([])

  useEffect(() => {

    async function buscarDados() {
      const result = await fetch('https://jsonplaceholder.typicode.com/todos')
      return await result.json()
    }

    buscarDados().then(res => setTarefas(res))
  }, [])


  return (
    <div className="container">

      <div >
        <h1 className={styles.title}>Buscando tarefas</h1>
        <div>
          {tarefas.map((tarefa) => {
            return (
              <>
                <div className='task-item' key={tarefa.id}>
                  <p> {tarefa.id} - {tarefa.title}</p>
                </div>
              </>
            )
          })}
        </div>
      </div>

     {/* <div className="list">
        <ol>
          {tarefas.map((tarefa) => {
            return (
              <>
                <div>
                  <li key={tarefa.id}>
                    {tarefa.title} -
                    {tarefa.completed ? 'Tarefa completa' : 'Tarefa não realizada'}
                  </li>
                </div>
              </>
            )
          })}
        </ol>

      </div> */}
    </div>
  )
}
