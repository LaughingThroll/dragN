import React, { useState, useRef } from 'react'
import ReactFlow, { addEdge, removeElements } from 'react-flow-renderer'
// import ConnectionLine from './ConnectionLine'

import FlowItem from './FlowItem'

import { APPLICATION_REACT_FLOW } from './../constant' 

const FlowWrapper = ({ currentItem }) => {
  const flowRef = useRef(null)

  const [elementsFlow, setElementsFlow] = useState([])
  const [reactFlowInstance, setReactFlowInstance] = useState(null)

  const onConnectHandler = (params) => {
    // Здесь ты можешь поменять вид линий
    // типы которые существуют 
    // step | smoothstep | straight
    //  также ты можешь комбинировать это со стилями
    // просто добавь #animated stroke red
    // type: 'smoothstep',
    // animated: true,
    // style: { stroke: 'red' }
    // можно сделать и свою линию но єто немного сложно потому оставлю ссылку на документацию 
    // https://reactflow.dev/examples/edges/ в самом низу есть CustomEdges
    setElementsFlow(addEdge({
      // Здесь нужно добавлять #animated stroke red 
      type: 'smoothstep',
      animated: true,
      style: { stroke: 'red' },
      ...params
    }, elementsFlow))
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
          // Здесь может быть любая разметка
          // Перейди в компонент FlowItem
          <FlowItem 
            {...currentItem}
          />
          
          // <h1> {currentItem.name} World !!!</h1>
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
        // Здесь ты сможешь изменить как должна выглядеть линия при connect
        // connectionLineType='step' | 'smoothstep' | 'straight'
        // чтобы комбинировать со стилями добавь эту строку
        connectionLineStyle={{ stroke: 'red' }}
        // чтобы создать свой тип коннекта с анимацией воспользуйся 
        // connectionLineComponent={ConnectionLine} чтобы было все красиво нужно делать свой svg и прописывать путь 
        connectionLineType='smoothstep'
        onLoad={onLoadFlowHandler}
        onDragOver={onDragOverHandler}
        onDrop={onDropHandler}
        onElementsRemove={onRemoveHandler}
      />
    </div>
  )
}

export default FlowWrapper
