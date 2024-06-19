import React, { useState } from "react";

/**
 * `Mysilder` 元件：渲染一個滑動條，用於調整數值，並調用 `onChange` 回調函數來處理滑動條變化。
 * @param {Object} props - 元件接收的參數。
 * @param {string} props.label - 滑動條的標籤。
 * @param {Function} props.onChange - 處理滑動條變化的回調函數。
 */

function Mysilder({label, onChange}){
    // 使用 useState 來管理滑動條的值
    const[value, setValue] = useState(128);

    /**
     * 處理滑動條變化的內部函數。
     * @param {Object} e - 事件對象。
     */

    const handleSliderchange = (e) => {
        const newValue = e.target.value; // 獲取滑動條的新值

        setValue(newValue); // 更新狀態
        if (onChange){
            onChange(newValue); // 調用回調函數
        }
    };

    return(
        <div>
            <span>{label}</span>
            <input 
                className="myslider"
                type="range" // 類型為範圍選擇
                width="400"
                min="0" 
                max="255" 
                value={value} 
                onChange={handleSliderchange} // 當滑動條變化時調用函數
            />
            
            <span>{value}</span> {/* 顯示當前值 */}
        </div>
        
    );
}
export default Mysilder;