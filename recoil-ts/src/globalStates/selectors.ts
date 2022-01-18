import { selector } from 'recoil'
import { SelectorKeys } from './recoilKeys'
import { textState } from './atoms'

export const charCountState = selector({
  key: SelectorKeys.CHAR_COUNT_STATE,
  get: ({ get }) => {
    const text = get(textState)
    return text.length
  },
})
