import React from 'react'
import TextInput from './TextInput'
import CharacterCount from './CharacterCount'

const CharacterCounter: React.FC = () => {
  return (
    <div>
      <TextInput />
      <CharacterCount />
    </div>
  )
}

export default CharacterCounter
