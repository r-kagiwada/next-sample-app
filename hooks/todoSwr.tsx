import useSWR from "swr";
import { TodoItem } from "../types";

export const useSWRTodoState = (
  initialTodoItems: TodoItem[]
): [TodoItem[], (todoItems: TodoItem[]) => void] => {
  const { data: todoItems, mutate: setTodos } = useSWR<TodoItem[]>('todoItems', null, {
    fallbackData: initialTodoItems
  });
  return [todoItems as TodoItem[], setTodos]
};