/*
 * @Author: shimingxia
 * @Date: 2022-05-25 15:05:47
 * @LastEditors: shimingxia
 * @LastEditTime: 2022-07-03 18:02:28
 * @Description: 
 */
import React, { useState } from 'react'
import ReduxPage from './pages/ReduxPage'
import './App.css'

export default function App(props) {
  const [num, setNum] = useState(1);
  return (
    <div>
      <button
        onClick={() => {
          setNum(num + 1);
        }}>
        change num: {num}
      </button>
      {num % 2 && <ReduxPage />}
    </div>
  );
}
