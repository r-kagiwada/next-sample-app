import { useCallback, useState } from "react";
import List from "../../components/List";

/**
 * useCallbackサンプル
 * @returns
 */

const UseCallbackSample: React.FC = () => {
  const [number, setNumber] = useState<number>(1);
  const [dark, setDark] = useState(false);
  const [incrementor, setIncrementor] = useState<number>(2);

  // const getItems = () => {
  //     return [
  //       number,
  //       number + 1,
  //       number + 2,
  //     ];
  // };
  const getItems = useCallback(() => {
    return [number, number + 1, number + 2];
  }, [number]);

  const theme = {
    backgroundColor: dark ? "#333" : "#FFF",
    color: dark ? "gray" : "#333",
  };
  return (
    <>
      <h1 className="m-5">useCallbackのサンプル</h1>
      <div className="flex flex-col" style={theme}>
        <input
          className="border-2 m-2 p-2 w-[200px]"
          type="number"
          value={number}
          onChange={(e) => setNumber(parseInt(e.target.value || "0"))}
        />
        <button
          className="m-2 p-2 w-[200px] border-2 border-blue-200"
          onClick={() => setDark((prevDark) => !prevDark)}
        >
          Toggle Theme
        </button>
        <List getItems={getItems} />
      </div>
    </>
  );
};
export default UseCallbackSample;
