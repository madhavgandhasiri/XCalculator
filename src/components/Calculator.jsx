import React, {useState} from "react";
import styles from "./Calculator.module.css";

function Button({ text, setExpression, setResult, expression }) {
  function handleClick(e){
    if(text === 'C'){
      setExpression("");
      setResult("");
    }else if(text === "=" && expression === ""){
      setResult("Error")
    }
    else if(text === "="){
      try{
        setResult(eval(expression).toString());
      }catch(error){
        setResult("NaN")
      }
      
    }else{
      setExpression((prev)=> prev + text);
    }
    
  }
  return <button className={styles.singleBtn} onClick={handleClick}>{text}</button>;
}

function Calculator() {
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState("");
  function handleChange(e){
    setExpression(e.target.value);
  }

  return (
    <div className={styles.container}>
      <div className={styles.calculator}>
        <h1>React Calculator</h1>
        <input type="text" value={expression} onChange={handleChange}/>
        {result.length > 0 ? (
        <h2>{result}</h2>
        ):(null)}
        <div className={styles.btn}>
          {['7','8','9','+','4','5','6','-','1','2','3','*','C','0','=','/'].map((char)=>(
            <Button key={char} text={char} setExpression={setExpression} setResult={setResult} expression={expression} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Calculator;
