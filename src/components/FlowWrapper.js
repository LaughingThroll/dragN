import React, { useState, useRef } from 'react'
import ReactFlow, { addEdge, removeElements } from 'react-flow-renderer'

import { APPLICATION_REACT_FLOW } from './../constant' 

const FlowWrapper = ({ currentItem }) => {
  const flowRef = useRef(null)

  const [elementsFlow, setElementsFlow] = useState([])
  const [reactFlowInstance, setReactFlowInstance] = useState(null)

  const onConnectHandler = (params) => {
    setElementsFlow(addEdge(params, elementsFlow))
  }
  const onLoadFlowHandler = (reactFlowInstance) => {
    setReactFlowInstance(reactFlowInstance)
  }

  const onRemoveHandler = (elementsToRemove) => {
    setElementsFlow(removeElements(elementsToRemove, elementsFlow))
  }

  const onDragOverHandler = (e) => {
    e.preventDefault()
    e.dataTransfer.dropEffect = 'move'
  }

  const onDropHandler = (e) => {
    e.preventDefault()

    const reactFlowBounds = flowRef.current.getBoundingClientRect()
    const type = e.dataTransfer.getData(APPLICATION_REACT_FLOW)
    const position = reactFlowInstance.project({
      x: e.clientX - reactFlowBounds.left,
      y: e.clientY - reactFlowBounds.top
    })

    const newElementFlow = {
      id: Date.now().toString(),
      type,
      position,
      data: {
        label: (
          <h1> {currentItem.name} World !!!</h1>
        )
      }
    }

    setElementsFlow([...elementsFlow, newElementFlow])

  } 

  return (
    <div className="drag-n-drop__flow flow" ref={flowRef}>
      <ReactFlow
        elements={elementsFlow}
        onConnect={onConnectHandler}
        onLoad={onLoadFlowHandler}
        onDragOver={onDragOverHandler}
        onDrop={onDropHandler}
        onElementsRemove={onRemoveHandler}
      />
    </div>
  )
}

export default FlowWrapper
