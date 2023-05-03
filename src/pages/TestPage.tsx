import React, { useState, useEffect } from "react"

export const ServerDrivenUI = () => {
  const [uiData, setUIData] = useState<any>(null)

  useEffect(() => {
    setUIData(data)
  }, [])

  if (!uiData) {
    return <div>Loading...</div>
  }

  return (
    <div>
      {uiData.content.body.map((component: any) => (
        <DynamicComponent key={component.id} type="div" style={component.data.style}>
          {component.data.title}
        </DynamicComponent>
      ))}
    </div>
  )
}

// @ts-ignore
const DynamicComponent = ({ type, style, children }) => {
  const Component = getComponentByType(type)
  return <Component style={style}>{children}</Component>
}

const getComponentByType = (type: any) => {
  // return the appropriate React component based on the type
  return type
}

export default ServerDrivenUI

const data = {
  content: {
    body: [
      {
        id: 1,
        data: { title: "mina", style: { background: "yellow" } }
      },
      {
        id: 2,
        data: { title: "hoon", style: { background: "pink" } }
      },
      {
        id: 3,
        data: { title: "han", style: { background: "blue" } }
      }
    ]
  }
}
