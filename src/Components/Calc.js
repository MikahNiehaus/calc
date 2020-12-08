import React, { useState, useEffect } from 'react';
export default function Calc() {
    const [num, setNum] = useState(0)
    const handleOneClick = () => (setNum(addNum(num,1)))
    const handleTwoClick = () => (setNum(addNum(num,2)))
    const handleThreeClick = () => setNum(addNum(num,3))
    const handleFourClick = () => setNum(addNum(num,4))
    const handleFiveClick = () => setNum(addNum(num,5))
    const handleSixClick = () => setNum(addNum(num,6))
    const handleSevenClick = () => setNum(addNum(num,7))
    const handleEightClick = () => setNum(addNum(num,8))
    const handleNineClick = () => setNum(addNum(num,9))
    const handleZeroClick = () => setNum(addNum(num,0))
    const handlePointClick = () => setCommand(".")
    const handleNegativeClick = () => setNum(-num)

    const [command, setCommand] = useState("")
    const [history, setHistory] = useState(null)
    const handleACClick = () => (setNum(0),setHistory(null),setCommand(""))//, setSavedNum([])
    const handlePlusClick = () => (equal(),setCommand("+"))
    const handleMinusClick = () => (equal(),setCommand("-"))
    const handleDivideClick = () => (equal(),setCommand("/"))
    const handleModClick = () => (equal(),setCommand("%"))
    const handleTimesClick = () => (equal(),setCommand("*"))

    const handleEqualClick = () => (equal())
    useEffect(() => {
    })
  
    function addNum(a,b){
  let x = 0;
      if(history===num){
        return b
      } else{
     
      if(command==="." && Number.isInteger(a)){
        x = a.toString() + "." + b.toString()
      }else{
        x = a.toString() + b.toString()
      }
     return x*1
      }
    }


    function equal(){
     if (command===""||command===".") {
          setHistory(num);
          setNum(0)
     } else {
       switch (command) {
                 case '+':
                  setNum(history + num)
                  setHistory(history + num);
                  setCommand("")
                  break;   
                 case '-':
                      setNum(history - num)
          setHistory(history - num);
          setCommand("")
          break;  
                 case '/':
                      setNum(history / num)
          setHistory(history / num);
          setCommand("")
          break;  
                 case '%':
           setNum(history % num)
          setHistory(history % num);
          setCommand("")
          break;  
                 case '*':
           setNum(history * num)
          setHistory(history * num);
          setCommand("")
          break;  
                 case '=':
                   setNum(history)
                  setHistory(null);
        
                  break;
                 default:
          
     }
  }
}
    return (

      <div data-testid="component-calc">
       <h1 data-testid="num">{num}</h1> 
        <div>
          <button data-testid="AC" onClick={handleACClick}>AC</button>
          <button data-testid="+/-" onClick={handleNegativeClick}>+/-</button>
          <button data-testid="%" onClick={handleModClick}>%</button>
          <button data-testid="/" onClick={handleDivideClick}>/</button>
          </div>
        <div>
          <div>
          <button data-testid="7" onClick={handleSevenClick}>7</button>
          <button data-testid="8" onClick={handleEightClick}>8</button>
          <button data-testid="9" onClick={handleNineClick}>9</button>
          <button data-testid="x" onClick={handleTimesClick}>x</button>

          </div>
          <div>
          <button data-testid="4" onClick={handleFourClick}>4</button>
          <button data-testid="5" onClick={handleFiveClick}>5</button>
          <button data-testid="6" onClick={handleSixClick}>6</button>
          <button data-testid="-" onClick={handleMinusClick}>-</button>
          
          </div>
          <button data-testid="1" onClick={handleOneClick}>1</button>
          <button data-testid="2" onClick={handleTwoClick}>2</button>
          <button data-testid="3" onClick={handleThreeClick}>3</button>
          <button data-testid="+" onClick={handlePlusClick}>+</button>

          <div>
          <button data-testid="0" style={{width:"200px"}} onClick={handleZeroClick}>0</button>
          <button data-testid="." onClick={handlePointClick}>.</button>
          <button data-testid="=" onClick={handleEqualClick}>=</button>

          </div>
        </div>
      </div>
    )
  }
