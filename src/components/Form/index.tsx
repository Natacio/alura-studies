import React from 'react'
import Button from '../Button'
import style from './style.module.scss'

const Form = () => (
    <form className={style.novaTarefa}>
        <div className={style.inputContainer}>
            <label htmlFor='tarefa'>
                Adicione uma tarefa
            </label>
            <input
                type="text"
                name="tarefa"
                id="tarefa"
                placeholder="O que você quer estudar?"
                required
                >

                </input>

        </div>
        <div className={style.inputContainer}>
        <label htmlFor='tarefa'>
                Tempo
            </label>
            <input
                type="time"
                step="1"
                name="tempo"
                id="tempo"
                required
                >
                </input>
        </div>
        <Button></Button>
    </form>

)

export default Form
