import React from 'react'



// Это компонент который рисуеться когда ты перетащил елемент он принимает все аргументы которые были в текущем currentItem 
// У тебя могут быть разные название ключей следи за этим 
// Например вместо title будет name
// Просто поменяй title на name
// { title, text, src, ...something new }
const FlowItem = ({ title, text, src  }) => {
  return (
    <section className="flow-item">
      <h1 className="flow-item__title"> {title} </h1>
      <p className="flow-item__text">{text} </p>
      <img className="flow-item__image" src={src} alt={title} />
      {/* Можеш спокойно добовлять что то новое или  */}
    </section>
  )
}

export default FlowItem
