import React from 'react'

import { APPLICATION_REACT_FLOW, REACT_FLOW_NODE_TYPE } from './../constant'

const Sidebar = ({ data, setCurrentItem }) => {  
  const onDragStartHandler = (e, nodeType, currentEl) => {
    e.dataTransfer.setData(APPLICATION_REACT_FLOW, nodeType)
    e.dataTransfer.effectAllowed = 'move'
    setCurrentItem(currentEl)
  }

  return (
    <aside className="drag-n-drop__aside aside">
      <ul className="aside-list">
        {data.map(el => {
          return <li key={el.id} className="aside-list__item" onDragStart={(e) => onDragStartHandler(e, REACT_FLOW_NODE_TYPE.DEFAULT, el)} draggable >
            {el.name}
          </li>
        })}
      </ul>
    </aside>
  )
}

export default Sidebar
