import React from "react"
import { CardContainer } from "./index.style"

type Size = 'normal' | 'small'

interface CardProps {
  title: string;
  description: string;
  action: () => void;
  size?: Size;
}

const Card = ({ title, description, action, size = 'normal' }: CardProps) => {
  return (
    <CardContainer onClick={action}>
      { 
        size === 'normal' ?
        (<h2>{title} &rarr;</h2>) :
        (<span><strong>{title} &rarr;</strong></span>)
      }
      <p>{description}</p>
    </CardContainer>
  )
}

export default Card