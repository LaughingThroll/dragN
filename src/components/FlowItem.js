import React from 'react'

const FlowItem = ({ title, text, src }) => {
  return (
    <section className="flow-item">
      <h1 className="flow-item__title"> {title} </h1>
      <p className="flow-item__text">{text} </p>
      <img className="flow-item__image" src={src} alt={title} />
    </section>
  )
}

export default FlowItem
