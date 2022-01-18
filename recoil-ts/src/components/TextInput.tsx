import React from 'react'
import { useRecoilState } from 'recoil'
import { textState } from '../globalStates/atoms'

const TextInput: React.FC = () => {
  const [text, setText] = useRecoilState(textState)

  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    setText(event.currentTarget.value)
  }

  return (
    <div>
      <input type="text" value={text} onChange={onChange} />
      <br />
      Echo: {text}
    </div>
  )
}

export default TextInput
