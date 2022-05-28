import React from 'react'
import style from './style.module.scss'

const tarefas = [

  {
    tarefa: 'teste Java',
    tempo: '01:00:00'
  },
  {
    tarefa: 'react',
    tempo: '08:00:00'
  },
  {
    tarefa: 'Git',
    tempo: '02:00:00'
  }
]

const Lista = () => (
    <aside className={style.listaTarefas}>
        <h2>Estudos do dia</h2>
        <ul>
            { tarefas.map((item, index) => (
                <li key={index} className={style.item}>
                    <h3>{ item.tarefa}</h3>
                    <span>{item.tempo}</span>
                </li>
            ))
            }
        </ul>
    </aside>
)

export default Lista
