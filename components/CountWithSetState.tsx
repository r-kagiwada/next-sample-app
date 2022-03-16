
import React from "react";
interface State {
  count: number;
}

/**
 * setState関数を使った例です。
 */
class CountWithSetState extends React.Component<{}, State> {

  // コンストラクタでは初期値を設定します
  constructor(props: any) {
    super(props);
    this.state = {
      count: 0,
    };
  }


hundleCountUp(e : React.MouseEvent<HTMLButtonElement, MouseEvent>) {
  e.preventDefault();
  // stateにある値を変数に代入します。
  let count = this.state.count;
  // countから+１
  this.setState({ count: count + 1 });
}
hundleCountDown(e : React.MouseEvent<HTMLButtonElement, MouseEvent>) {
  e.preventDefault();
  // stateにある値を変数に代入します。
  let count = this.state.count;
  // countから−１
  this.setState({ count: count - 1 });
}
  render() {
    return(
      <div className="mx-5">
        <h1>setStateを使ったカウントアップ</h1>
        <div className="my-3">カウント: {this.state.count}</div>
        <button 
          className="mr-5 my-3 py-2 px-5 rounded-md hover: bg-blue-200 hover:bg-blue-600 active:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300 "
          onClick={(e) => this.hundleCountUp(e)}>
          count up button
        </button>
        <button 
          className="mr-5 my-3 py-2 px-5 rounded-md bg-gray-200 hover:bg-gray-400 active:bg-gray-500 focus:outline-none focus:ring focus:ring-gray-300"
          onClick={(e) => this.hundleCountDown(e)}>
          count down button
        </button>
      </div>
    )
  }
}

export default CountWithSetState;