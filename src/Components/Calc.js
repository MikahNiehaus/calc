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
      console.log("end---------------------------------")
    })
  
    function addNum(a,b){
  console.log("addNum",command)
  let x = 0;
      if(history===num){
       console.log("setNum",b)
        return b
      } else{
     
      if(command==="." && Number.isInteger(a)){
        x = a.toString() + "." + b.toString()
        console.log("setNum",x*1,x)
      }else{
        x = a.toString() + b.toString()
        console.log("setNum",x*1)
      }
     return x*1
      }
    }


    function equal(){
       console.log("equal")
     if (command===""||command===".") {
          setHistory(num);
          setNum(0)
          console.log("setNum",0)
          console.log("setHistory", num)
     } else {
       switch (command) {
                 case '+':
                  setNum(history + num)
                  setHistory(history + num);
                  setCommand("")
                  console.log("setNum",history + num)
                  console.log("setHistory",history + num)
                  console.log("setCommand","")
                  break;   
                 case '-':
                      setNum(history - num)
          setHistory(history - num);
          setCommand("")
          console.log("setNum",history - num)
          console.log("setHistory",history - num)
          console.log("setCommand","")
          break;  
                 case '/':
                      setNum(history / num)
          setHistory(history / num);
          setCommand("")
          console.log("setNum",history / num)
          console.log("setHistory",history / num)
          console.log("setCommand","")
          break;  
                 case '%':
           setNum(history % num)
          setHistory(history % num);
          setCommand("")
          console.log("setNum",history % num)
          console.log("setHistory",history % num)
          console.log("setCommand","")
          break;  
                 case '*':
           setNum(history * num)
          setHistory(history * num);
          setCommand("")
          console.log("setNum",history * num)
          console.log("setHistory",history * num)
          console.log("setCommand","")
          break;  
                 case '=':
                   setNum(history)
                  setHistory(null);
                  console.log("setNum",history + num)
                  console.log("setHistory",null)
        
                  break;
                 default:
          
     }
  }
}
    return (

      <div>
       <h1>{num}</h1> 
        <div>
          <button onClick={handleACClick}>AC</button>
          <button onClick={handleNegativeClick}>+/-</button>
          <button onClick={handleModClick}>%</button>
          <button onClick={handleDivideClick}>/</button>
          </div>
        <div>
          <div>
          <button onClick={handleSevenClick}>7</button>
          <button onClick={handleEightClick}>8</button>
          <button onClick={handleNineClick}>9</button>
          <button onClick={handleTimesClick}>x</button>

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
          <button onClick={handlePointClick}>.</button>
          <button onClick={handleEqualClick}>=</button>

          </div>
        </div>
      </div>
    )
  }
