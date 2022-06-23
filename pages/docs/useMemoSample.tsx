import { useState, useMemo, useEffect } from "react";

const UseMemoSample: React.FC = () => {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);
  const [dark, setDark] = useState(false);

  const incrementOne = () => {
    setCounterOne(counterOne + 1);
  };
  const incrementTwo = () => {
    setCounterTwo(counterTwo + 1);
  };

  // const isEven = () => {
  //   let i = 0;
  //   while(i < 2000000000) i++;
  //   console.log('counterOne update')
  //   return counterOne % 2 === 0;
  // };

  const style = useMemo(() => {
    return {
      backgroundColor: dark ? "rgb(7 89 133)" : "#FFF",
      color: dark ? "rgb(240 249 255)" : "rgb(7 89 133)",
    };
  }, [dark]);

  useEffect(() => {
    console.log("color changed");
  }, [style]);

  const isEven = useMemo(() => {
    let i = 0;
    while (i < 2000000000) i++;
    console.log("counterOne update");
    return counterOne % 2 === 0;
    // キャッシュする値を指定する。
  }, [counterOne]);

  return (
    <>
      <div>
        <h1 style={style} className="m-5 p-2">
          useMemoのサンプル
        </h1>
        <button className="m-2 p-2 bg-blue-200" onClick={incrementOne}>
          Counter One - {counterOne}
        </button>
        <span className="text-blue">{isEven ? "Even" : "Odd"}</span>
      </div>
      <div>
        <button className="m-2 p-2 bg-blue-200" onClick={incrementTwo}>
          Counter Two - {counterTwo}
        </button>
      </div>
      <div>
        <button
          className="m-2 p-2 bg-gray-400 rounded-lg text-white"
          onClick={() => setDark(!dark)}
        >
          change Title color
        </button>
      </div>
    </>
  );
};

export default UseMemoSample;
