import React from 'react';
import './calculator.css';

/**
 * `MyButton` 组件：渲染一個带有多個按钮的按钮面板，用於觸發計算機的操作。
 * @param {Object} props - 组件接收的参数。
 * @param {Function} props.buttonClicked - 處理按鈕點擊事件的回傳函數。
 */

function MyButton({buttonClicked}){

     /**
     * 處理按鈕點擊事件的內部函數。
     * @param {Object} e - 事件對象。
     */

    const handleclick = (e) => {buttonClicked(e.target.value);}; // 調用副组件傳遞的回傳函數，並傳遞按鈕的值。
    return(
        <div className='buttons'>
            <div>
                 {/* 每個按钮都有相應的 class 和點擊事件 */}
                <button className='btn btn-action' onClick={handleclick} value="c">C</button>
                <button className='btn btn-action' onClick={handleclick} value="+/-">+/-</button>
                <button className='btn btn-action' onClick={handleclick} value="%">%</button>
                <button className='btn btn-operator' onClick={handleclick} value="/">/</button>
            </div>
            <div>
                <button className='btn' onClick={handleclick} value="7">7</button>
                <button className='btn' onClick={handleclick} value="8">8</button>
                <button className='btn' onClick={handleclick} value="9">9</button>
                <button className='btn btn-operator' onClick={handleclick} value="*">*</button>
            </div>
            <div>
                <button className='btn' onClick={handleclick} value="4">4</button>
                <button className='btn' onClick={handleclick} value="5">5</button>
                <button className='btn' onClick={handleclick} value="6">6</button>
                <button className='btn btn-operator' onClick={handleclick} value="-">-</button>
            </div>
            <div>
                <button className='btn' onClick={handleclick} value="1">1</button>
                <button className='btn' onClick={handleclick} value="2">2</button>
                <button className='btn' onClick={handleclick} value="3">3</button>
                <button className='btn btn-operator' onClick={handleclick} value="+">+</button>
            </div>
            <div>
                <button className='btn btn-0' onClick={handleclick} value="0">0</button>
                <button className='btn' onClick={handleclick} value=".">.</button>
                <button className='btn btn-operator' onClick={handleclick} value="=">=</button>
            </div>
        </div>
    );
}

export default MyButton;