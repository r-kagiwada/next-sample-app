import axios from "axios";
import { ChangeEvent, Dispatch, SetStateAction, useEffect, useState } from "react";
import { User } from "../../types";


const UseEffectSample = () => {

  const [title, setTitle] = useState<string>("useState SamplePage");
  const [result, setResult] = useState<number>(0);
  const [number1, setNumber1] = useState<number>(0);
  const [number2, setNumber2] = useState<number>(0);

  const [searchUserId, setSearchId] = useState<string>("1");
  const [user, setUser] = useState<User | undefined>();

  // タイマー用のカウント
  const [count, setCount] = useState<number>(0);
  useEffect(() => {
    // 初期のみ
    console.log('マウント時のみ処理を実行します！');
    setTitle("useEffect Sample Page");
  }, []);

  useEffect(() => {
    // number1とnumber2の値の変化ごとに計算します。
    setResult(number1 + number2);
  }, [number1, number2]);

  // 入力値をハンドリングする
  const handleNumberChange = (event: ChangeEvent<HTMLInputElement>, setState: Dispatch<SetStateAction<number>>) => {
    const value = parseInt(event.currentTarget.value);
    value ? setState(value) : setState(0);
  };

  useEffect(() => {
    console.log('mounted timer')
    const countUp = setInterval(() => {
      setCount(prevCount => prevCount + 1);
      console.log('countUp');
    }, 1000);

    return () => {
      console.log('unmounted ');
      clearInterval(countUp);
    }
  }, []);

  // axiosを使ったAPI通信の例
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users/' + searchUserId)
      .then((res) => {
        setUser(res.data);
      }).catch(error => {
        console.log(error);
      })
  }, [searchUserId]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    // 数値チェック
    if (parseInt(value)) {
      setSearchId(value);
    }
  }

  return (
    <>
      <h1 className="m-5">{title}</h1>
      <h2 className="m-5">useEffectについて学ぶサンプルコード</h2>
      <div className="border "></div>
      <div className="m-5 ">
        <h4>入力した数値の計算結果を表示します</h4>
        <p className="italic text-blue-600">数値を入力してください。</p>
        <label>入力１</label>
        <input className="border-2 px-2 py-1 border-blue-400 rounded m-2 focus:outline-blue-500"
          type="number"
          defaultValue={number1}
          onChange={(e) => handleNumberChange(e, setNumber1)}
        ></input>
        <label>入力２</label>
        <input className="border-2 px-2 py-1 border-blue-400 rounded m-2 focus:outline-blue-500"
          type="number"
          defaultValue={number2}
          onChange={(e) => handleNumberChange(e, setNumber2)}
        ></input>
        <span className="mr-2">=</span><span>{result}</span>
      </div>
      <div className="border "></div>
      <h2 className="m-5">カウントアップする例</h2>
      <p className="m-5">クリーンアップ関数を呼び出すuseEffectの実装例です.</p>
      <span className="mx-5">１秒ごとにカウントアップします</span><span className="m-2 text-blue-500 border-2 p-2">{count}</span>
      <div className="border mt-3"></div>
      <div>
        <h2 className="m-5">APIでデータを取得する例</h2>
        <p className="m-5">ユーザーidを入力してください</p>
        <input className="border-2 px-2 py-1 border-blue-400 rounded mx-5 focus:outline-blue-500" defaultValue={searchUserId} onChange={handleChange} ></input>

        <p className="my-2 mx-5">取得結果</p>
        <div className="border-2 mx-5">
          {user ? 
          <ul className="mx-5 my-2">
            <li><span>id: </span>{user.id}</li>
            <li><span>name: </span>{user.name}</li>
            <li><span>email: </span>{user.email}</li>
            <li><span>phone: </span>{user.phone}</li>
          </ul> : <></>}
        </div>
      </div>
    </>
  )
}

export default UseEffectSample;