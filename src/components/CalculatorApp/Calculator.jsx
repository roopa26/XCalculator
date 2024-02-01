import React, { useEffect, useRef, useState } from "react";
import styles from './Calculator.module.css';
import Button from "../NumberButton/Button";

const CalulatorApp = () =>{

    const [inputText, setInputText] = useState("");
    const [calculatedValue, setcalculatedValue] = useState('');
    //const intervalTimeId = useRef(null); 

    const handleClick = (value) =>{
        //debounceSearch(value);
        setInputText((prev) => prev+value);
    }

    // const debounceSearch = (value) => {
    //     clearInterval(intervalTimeId.current);
    //     intervalTimeId.current = setTimeout(()=>{
    //         setInputText((prev) => prev+value);
    //     },500);
    // }

    const calculate = ()=>{
        if(inputText.length == 0)
        setcalculatedValue('Error');
        else
        setcalculatedValue(eval(inputText).toString());
    }

    const clearInput = () =>{
        setInputText("");
        setcalculatedValue("");
    }

    const wrapperStyle = {
        'margin':'4px'
    }

    return(
        <div style={{ textAlign: 'center',backgroundColor:'white', width:'300px',margin:'20px auto', height:'400px' }}>
            <h1>React Calculator</h1>
            <input style={{ display: 'block', margin: '20px auto' }} type="text" value={inputText} onChange={(e)=>{setInputText(e.target.value)}}/>
            {calculatedValue && (<label style={{ display: 'block', margin: '20px auto' }}>{calculatedValue}</label>)}
            <div className={wrapperStyle}>
            <div>
                <Button textInButton={7} handleClick={handleClick}></Button>
                <Button textInButton={8} handleClick={handleClick}></Button>
                <Button textInButton={9} handleClick={handleClick}></Button>
                <Button textInButton={'+'} handleClick={handleClick}></Button>
            </div>
            <div>
                <Button textInButton={4} handleClick={handleClick}></Button>
                <Button textInButton={5} handleClick={handleClick}></Button>
                <Button textInButton={6} handleClick={handleClick}></Button>
                <Button textInButton={'-'} handleClick={handleClick}></Button>
            </div>
            <div>
                <Button textInButton={1} handleClick={handleClick}></Button>
                <Button textInButton={2} handleClick={handleClick}></Button>
                <Button textInButton={3} handleClick={handleClick}></Button>
                <Button textInButton={'*'} handleClick={handleClick}></Button>
            </div>
            <div>
                <Button textInButton={'C'} handleClick={clearInput}></Button>
                <Button textInButton={0} handleClick={handleClick}></Button>
                <Button textInButton={'='} handleClick={calculate}></Button>
                <Button textInButton={'/'} handleClick={handleClick}></Button>
            </div>
            </div>
        </div>
    )
}

export default CalulatorApp;