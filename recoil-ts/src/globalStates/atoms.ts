import { atom } from 'recoil'
import { AtomKeys } from './recoilKeys'
import { TodoItemType } from '../types'

export const textState = atom<string>({
  key: AtomKeys.TEXT_STATE,
  default: '',
})

export const todoListState = atom<TodoItemType[]>({
  key: AtomKeys.TODO_STATE,
  default: [],
})
