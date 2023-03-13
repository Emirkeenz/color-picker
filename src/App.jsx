import './App.css'
import { useState } from "react"
import Wrapper from './components/Wrapper'
import Circle from './components/Circle'

export default function App() {
  const colors = ['color-1', 'color-2', 'color-3', 'color-4', 'color-5']
  const [background, setBackground] = useState(colors[0])

  const handleCircleClick = (color) => {
    setBackground(color)
  }

  return (
    <Wrapper color={background}>
      {[1, 2, 3, 4, 5].map(num => {
        return (
          <Circle key={num} num={num} color={colors} onCircleClick={handleCircleClick} />
        );
      })}
    </Wrapper>
  )
}

