import { atom } from 'recoil'
import { AtomKeys } from '../recoilKeys'

export const textState = atom<string>({
  key: AtomKeys.TEXT_STATE,
  default: '',
})
