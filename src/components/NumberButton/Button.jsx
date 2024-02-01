import React from "react";
import styles from './Button.module.css';

const Button = ({textInButton, handleClick}) =>{
    return(
            <button className={styles.buttonStyle} onClick={()=>{handleClick(textInButton)}}>{textInButton}</button>
    )
}

export default Button;