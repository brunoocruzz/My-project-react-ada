import { useState } from "react";

import styles from '../styles/button.module.css';


export default function Contador() {

  const [count, setCount] = useState(0)

  function incrementCount() {
    setCount(count+1)
  }

  return(
    <div className="container">
      <h1>Meu Contador</h1>
      <h3>{count}</h3>
      <button className={styles.myButton} onClick={incrementCount}>aumentar</button>
    </div>
  )
}