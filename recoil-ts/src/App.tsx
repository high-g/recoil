import React from 'react'
import { RecoilRoot } from 'recoil'
import CharacterCounter from './components/CharacterCounter'

const App: React.FC = () => {
  return (
    <RecoilRoot>
      <CharacterCounter />
    </RecoilRoot>
  )
}

export default App
