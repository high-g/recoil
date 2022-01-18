import React from 'react'
import { useRecoilState } from 'recoil'
import { todoListState } from '../globalStates/atoms'
import { TodoItemType } from '../types'

const TodoItem: React.FC<Props> = ({ item }) => {
  const [todoList, setTodoList] = useRecoilState(todoListState)
  const index = todoList.findIndex((listItem) => listItem === item)

  const editItemText = (e: React.FormEvent<HTMLInputElement>) => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      text: e.currentTarget.value,
    })
    setTodoList(newList)
  }

  const toggleItemCompletion = () => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      isComplete: !item.isComplete,
    })
    setTodoList(newList)
  }

  const deleteItem = () => {
    const newList = removeItemAtIndex(todoList, index)
    setTodoList(newList)
  }

  return (
    <div>
      <input type="text" value={item.text} onChange={editItemText} />
      <input type="checkbox" checked={item.isComplete} onChange={toggleItemCompletion} />
      <button onClick={deleteItem}>x</button>
    </div>
  )
}

function replaceItemAtIndex(arr: TodoItemType[], index: number, newValue: TodoItemType) {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)]
}

function removeItemAtIndex(arr: TodoItemType[], index: number) {
  return [...arr.slice(0, index), ...arr.slice(index + 1)]
}

type Props = {
  item: TodoItemType
}

export default TodoItem
