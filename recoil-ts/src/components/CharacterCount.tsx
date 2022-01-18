import React from 'react'
import { useRecoilValue } from 'recoil'
import { charCountState } from '../globalStates/selectors'

const CharacterCount: React.FC = () => {
  const count = useRecoilValue(charCountState)
  return <>Character Count: {count}</>
}

export default CharacterCount
