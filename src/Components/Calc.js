import React, { useState, useEffect } from 'react';

export default function Calc(props) {

    const [num, setNum] = useState(0)
    const handleOneClick = () => (setNum(addNum(num,1)),console.log(num))
    const handleTwoClick = () => (setNum(addNum(num,2)),console.log(num))
    const handleThreeClick = () => setNum(addNum(num,3),console.log(num))
    const handleFourClick = () => setNum(addNum(num,4))
    const handleFiveClick = () => setNum(addNum(num,5))
    const handleSixClick = () => setNum(addNum(num,6))
    const handleSevenClick = () => setNum(addNum(num,7))
    const handleEightClick = () => setNum(addNum(num,8))
    const handleNineClick = () => setNum(addNum(num,9))
    const handleZeroClick = () => setNum(addNum(num,0))

    const [savedNum, setSavedNum] = useState(0)
    const [command, setCommand,] = useState('+')
    const [equalNum, setEqualNum] = useState(null)
    const handleACClick = () => (setNum(0), setSavedNum(0),setEqualNum(null))
    const handlePlusClick = () => (setCommand('+'),setSavedNum(Equal()),setEqualNum(null),setNum(0),console.log(savedNum, num))
    const handleMinusClick = () => (setEqualNum(null),setNum(0),setCommand('-'),setSavedNum(Equal()),console.log(savedNum, num))
    const handleEqualClick = () => (console.log(savedNum, num),setNum(null),setEqualNum(Equal()),setSavedNum(0),setCommand(''))

    useEffect(() => {
      console.log("hit")
    })

    function addNum(a,b){
      if(a===null){
        setEqualNum(null)
        return b
      } else{
     let x = a.toString() + b.toString()
     return parseInt(x)
      }
    }

    function Equal(){
      console.log("Equal Function")
      switch (command) {
        case '+':
         return savedNum + num
        case '-':
          return savedNum - num
        case '/':
          return savedNum / num
        case '%':
          return savedNum % num
        case '*':
          return savedNum * num
        default:
        return 0
    }
  }

    return (
      <div>
       <h1>{num}{equalNum}</h1> 
        <div>
          <button onClick={handleACClick}>AC</button>
          <button onClick={handleEightClick}>+/-</button>
          <button onClick={handleNineClick}>%</button>
          <button onClick={handleNineClick}>/</button>
          </div>
        <div>
          <div>
          <button onClick={handleSevenClick}>7</button>
          <button onClick={handleEightClick}>8</button>
          <button onClick={handleNineClick}>9</button>
          <button onClick={handleNineClick}>x</button>

          </div>
          <div>
          <button onClick={handleFourClick}>4</button>
          <button onClick={handleFiveClick}>5</button>
          <button onClick={handleSixClick}>6</button>
          <button onClick={handleMinusClick}>-</button>
          
          </div>
          <button onClick={handleOneClick}>1</button>
          <button onClick={handleTwoClick}>2</button>
          <button onClick={handleThreeClick}>3</button>
          <button onClick={handlePlusClick}>+</button>

          <div>
          <button style={{width:"200px"}} onClick={handleZeroClick}>0</button>
          <button onClick={handleNineClick}>.</button>
          <button onClick={handleEqualClick}>=</button>

          </div>
        </div>
      </div>
    )
  }
