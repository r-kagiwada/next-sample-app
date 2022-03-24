import React, { ChangeEvent } from "react";
import CountWithUseState from '../../components/CounterWithUseState';
import CountWithSetState from "../../components/CountWithSetState";

interface State {
  message: String;
}

class StateSample extends React.Component<{}, State> {

  constructor(props: any) {
    super(props);
    this.state = {
      message: "",
    };
  }


hundleInputMessage(event: ChangeEvent<HTMLInputElement>) {
  const value = (event.currentTarget as HTMLInputElement).value;
  this.setState({ message: value });
}
  render() {
    return(
      <>
      <h1 className="m-5">State Sample Page</h1>
      <h2 className="m-5">stateについて学ぶサンプルコードと動作</h2>
      <div className="mb-3 border-2"></div>
      <CountWithSetState />
      <div className="mb-3 border-dashed border-2"></div>
      <CountWithUseState />
      <div className="mb-3 border-dashed border-2"></div>
      <input className="m-5 p-2 border-2 block rounded-md" type="text" onChange={(e) => this.hundleInputMessage(e)} />
      <p className="m-5">入力した値: {this.state.message}</p>
      </>
    )
  }


}
export default StateSample;