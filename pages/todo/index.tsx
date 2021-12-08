import classNames from 'classnames';
import type { NextPage } from 'next'
import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { useSWRTodoState } from '../../hooks/todoSwr'

const Todo: NextPage = () => {
  const [todos, setTodos] = useSWRTodoState([]);
  const [tmpTodo, setTmpTodo] = useState<string>("");
  const [showBorder, setShowBorder] = useState<Boolean>(false);

  useEffect(() => {
    const doneItems = todos.find(todo => todo.done);
    // 一つでも終了したアイテムがあったら、ボーダー表示する
    doneItems ? setShowBorder(true) : setShowBorder(false);
  }, [todos]);
  /**
   * todoを追加する.
   */
  const addTodo = () => {
    if (tmpTodo) {
      setTodos([...todos, { id: uuidv4(), message: tmpTodo, done: false }]);
      // クリアにする
      setTmpTodo("");
    }
  }

  /**
   * 
   * @param id 
   */
  const handleToggle = (id: string) => {
    const _todos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          done: !todo.done,
        }
      }
      return todo;
    });
    setTodos(_todos);
  };
  /**
   * todoを削除する.
   * @param index 
   */
  const deleteTodo = (index: number) => {
    const newTodos = todos.filter((todo, todoIndex) => {
      return index !== todoIndex;
    });
    setTodos(newTodos);
  }
  // TODO discriptionを書く
  return (
    <div className="m-5 grid justify-items-center">

      <h1 className="text-4xl p-4 m-5">
        TODO List
      </h1>

      <div className="space-x-4 justify-center  w-7/12">
        <input
          className="focus:border-light-blue-500 w-9/12 focus:ring-1 focus:ring-light-blue-500 placeholder-opacity-50 focus:outline-none text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md py-2 pl-5 flex1"
          type="text"
          name="todo"
          value={tmpTodo}
          placeholder="やることを入力しよう！"
          onChange={e => setTmpTodo(e.target.value)}
        />
        <button type="button" className="flex2 btn btn-blue" onClick={addTodo}>追加</button>
      </div>
      <div className="w-6/12">
        {!todos.find(todo => todo) ? <p className="m-2 text-gray-500 text-xs">No TODO items</p> : ""}
        {!todos.find(todo => !todo.done) && todos.length > 0 ? <p className="m-2">Done!</p> : ""}
        <ul className=" list-inside my-5 list-disc bg-blue-50 rounded-md">
          {todos.filter((todo => !todo.done)).map((todo, index) => {
            const { done } = todo;
            // const lineThrough = done;
            return (
              <div className="relative w-full" key={index}>
                <li
                  onClick={() => handleToggle(todo.id)}
                  className={classNames("todo  p-2 inline-block", { 'line-through': done })}
                >{todo.message}
                </li>
                <button className="m-2 absolute right-5" onClick={() => deleteTodo(index)}> x </button>
              </div>
            )
          })}

        </ul>
        {showBorder ? <hr className="border-t-[0.5px] border-gray-900" /> : ""}
        <ul className=" list-inside my-5 list-disc bg-gray-200 rounded-md">
          {todos.filter((todo => todo.done)).map((todo, index) => {
            const { done } = todo;
            return (
              <div className="relative w-full" key={index}>
                <li
                  onClick={() => handleToggle(todo.id)}
                  className={classNames("todo min-w-20 p-2 inline-block", { 'line-through': done })}
                >{todo.message}
                </li>
                <button className="m-2 absolute right-5" onClick={() => deleteTodo(index)}> x </button>
              </div>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default Todo;
