import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './redux/slides/counterSlide'
import styled from "styled-components";

function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  const Button = styled.button({
    color: 'grey',
  });


  return (
      <div>
        <div>
          <Button
              aria-label="Increment value"
              onClick={() => dispatch(increment())}
          >
            Increment
          </Button>
          <span>{count}</span>
          <Button
              aria-label="Decrement value"
              onClick={() => dispatch(decrement())}
          >
            Decrement
          </Button>
        </div>
      </div>
  )

}

export default App