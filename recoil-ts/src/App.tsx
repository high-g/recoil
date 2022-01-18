import React from 'react'
import { RecoilRoot } from 'recoil'
import CharacterCounter from './components/CharacterCounter'
import TodoList from './components/TodoList'

const App: React.FC = () => {
  return (
    <RecoilRoot>
      <div>
        <h2>CharacterCounter</h2>
        <CharacterCounter />
      </div>

      <div>
        <h2>TodoList</h2>
        <TodoList />
      </div>
    </RecoilRoot>
  )
}

export default App
