import React from 'react'

import { APPLICATION_REACT_FLOW } from './../constant'

const Sidebar = ({ data }) => {  
  const onDragStartHandler = (e, nodeType) => {
    e.dataTransfer.setData(APPLICATION_REACT_FLOW, nodeType)
    e.dataTransfer.effectAllowed = 'move'
  }

  return (
    <aside className="drag-n-drop__aside aside">
      <ul className="aside-list">
        {data.map(el => {
          // TODO el.lang incorrect
          return <li key={el.id} className="aside-list__item" onDragStart={(e) => onDragStartHandler(e, el.lang)} draggable >
            {el.name}
          </li>
        })}
      </ul>
    </aside>
  )
}

export default Sidebar
