import React, { useState, useEffect } from 'react'
import { ReactFlowProvider } from 'react-flow-renderer'

import Sidebar from './Sidebar'
import FlowWrapper from './FlowWrapper'

import data from './../api/db'


const App = () => {
  const [items, setItems] = useState([])
  const [currentItem, setCurrentItem] = useState(null)


  useEffect(() => {
    setItems(data)
  }, [])

  return (
    <div className="container-fluid">
      <div className="drag-n-drop">
        <ReactFlowProvider>
          <Sidebar data={items} setCurrentItem={setCurrentItem} />
          <FlowWrapper currentItem={currentItem} />
        </ReactFlowProvider>
      </div>
    </div>
  )
}

export default App
