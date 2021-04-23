import React from 'react'

const ConnectionLine = ({
  sourceX,
  sourceY,
  targetX,
  targetY,
  // первые 4 обязательны
  // sourcePosition,
  // targetPosition,
  // эти 2 выше можушь поэкспрементировать
  connectionLineType = 'smoothstep',
  // connectionLineStyle,
  // 2 выше задают типы и стили для линии
}) => {
  return (
    <g>
      <path
        fill="none"
        stroke="red"
        strokeWidth={1.5}
        className="animated"
        d={`M${sourceX},${sourceY} C ${sourceX} ${targetY} ${sourceX} ${targetY} ${targetX},${targetY}`}
      />
      {/* <circle cx={targetX} cy={targetY} fill="#fff" r={3} stroke="#222" strokeWidth={1.5} /> */}
    </g>
  );
};

export default ConnectionLine