import React from 'react'
import { useRecoilValue } from 'recoil'
import { todoListState } from '../globalStates/atoms'
import TodoItemCreator from './TodoItemCreator'
import TodoItem from './TodoItem'
import { TodoItemType } from '../types'

const TodoList: React.FC = () => {
  const todoList = useRecoilValue(todoListState)
  return (
    <>
      <p>
        <TodoItemCreator />
      </p>

      {todoList.map((todoItem: TodoItemType) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </>
  )
}

export default TodoList
