import React, { useState } from "react";
import MyDisplay from "./MyDisplay";
import MyButton from "./MyButton";
import "./calculator.css";

/**
 * `MyCalculator` 组件：主計算機組件，管理計算邏輯和狀態。
 */

function MyCalculator() {
  // 使用 useState 来管理計算结果的狀態。
  const [result, setResult] = useState("0");

   /**
   * 處理按鈕點擊事件的內部函數
   * 根据按钮的值更新計算结果。
   * @param {string} value - 按钮的值。
   */

  const handleclick = (value) => {
    // alert(value);
    switch (value) {
      case "0":
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
      case ".":
      case "+":
      case "-":
      case "*":
      case "/":
        if (result === "0") {
          setResult(value); // 如果當前顯示為 0，直接替换
        } else {
          setResult(result + value); //否則在當前結果後追加
        }
        break;
      case "=":
        setResult(eval(result).toString()); // 使用 eval 計算表達，並將結果轉換為字串
        break;
      case "c":
        setResult(""); //清空顯示
        break;
      case "+/-":
        setResult(parseInt(result, 10) * -1); //切換正負號
        break;
      case "%":
        setResult(parseInt(result, 10) / 100); //轉換百分數
        break;
      default:
        break;
    }
  };
  return (
    <div className="calculator">
      <MyDisplay result={result} />
      <MyButton buttonClicked={handleclick} />
    </div>
  );
}

export default MyCalculator;