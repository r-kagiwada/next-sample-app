import { useState } from "react";

/**
 * UseState関数を使った例です。
 * @returns 
 */
const CountWithUseState = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="mx-5">
      <h1>useState使ったカウントアップ</h1>
      <div className="my-3">カウント: {count}</div>
      <button 
        className="my-3 mr-5 py-2 px-5 rounded-md hover: bg-blue-200 hover:bg-blue-600 active:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300 "
        onClick={(e) => setCount(count + 1)}>
        count up button
      </button>
      <button
        className="my-3 py-2 px-5 rounded-md bg-gray-200 hover:bg-gray-400 active:bg-gray-500 focus:outline-none focus:ring focus:ring-gray-300"
        onClick={(e) => setCount(count - 1)}>
        count down button
      </button>
      
    </div>
  );
};
export default CountWithUseState;