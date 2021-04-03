import React, { useState, useEffect } from 'react'
import { ReactFlowProvider } from 'react-flow-renderer'

import Sidebar from './Sidebar'
import FlowWrapper from './FlowWrapper'

import data from './../api/db'

const App = () => {
  const [items, setItems] = useState([])
  const [currentItem, setCurrentItem] = useState(null)


  useEffect(() => {
    // Вот здесь мы делаем запрос на сервер 
    // Сейчас здесь находиться "моковый" запрос
    // Чтобы сделать настоящий запрос через REST API пиши следуйщее
    //  ТВОЙ_URL_НА_БД = что то типо 'https://jsonplaceholder.typicode.com/todos'
    // НАСТРОЙКИ = это настройки твоего запроса, настройка Headers, methods и прочее. Являеться не обязательным

    // fetch(ТВОЙ_URL_НА_БД, НАСТРОЙКИ).then(res => res.json()).then(data => {
      // setItems(data)  
    // })
  // .catch(error => {
    // console.log('Ошибка Сервера', err)
  // })
  
  // ---- Как выглядит стандартная обработка щзапроса на БД
    // fetch('https://jsonplaceholder.typicode.com/todos').then(res => res.json()).then(data => {
      // console.log(data)
      // setItems(data)
    // }).catch(err => {
      // console.log('Some Error', err)
    // })  

  setItems(data)
  }, [])

  return (
    <div className="container-fluid">
      <div className="drag-n-drop">
        <ReactFlowProvider>
          {/*
          Это та боковая панель 
          Компонент SideBar принимает два аргумента data={Какой-то массив данных} setCurrentItem={функция которая устанавливает текущий взятый елемент }  
          Попробуй вместо data передать пустой массив = [] 
          или один елемент = [{
            title: 'It\'s very easy',
            id: 1,
            src: 'https://www.flaticon.com/svg/vstatic/svg/4379/4379583.svg?token=exp=1617459524~hmac=8be860ca0acaa6c79ff3768ec8617076'
          }]
          
          */}
          
          <Sidebar data={items} setCurrentItem={setCurrentItem} />
          {/* Это основной рисующий механизм 
          принимает один аргумент currentItem={текущий выбраный елемент}   */}
          <FlowWrapper currentItem={currentItem} />
        </ReactFlowProvider>
      </div>
    </div>
  )
}

export default App
