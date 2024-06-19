import React from 'react';
import './calculator.css';

/**
 * `MyDisplay` 组件：顯示當前的計算結果。
 * @param {Object} props - 组件接收的参数。
 * @param {string} props.result - 當前的計算結果。
 */

function MyDisplay(props){
    return(<div className='display'>
        {props.result} {/* 顯示當前结果 */}
    </div>);
}

export default MyDisplay;