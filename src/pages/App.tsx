import React from 'react'
import Form from '../components/Form'
import Lista from '../components/Lista'
import style from './style.module.scss'

function App () {
  return (
    <div className={style.AppStyle}>
      <Form></Form>
      <Lista></Lista>
    </div>
  )
}

export default App
