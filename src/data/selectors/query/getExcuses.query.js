import { selector } from 'recoil'
import { excusesAtom } from '../../atoms/excuses.atom'

export const getExcusesQuery = selector({
  key: 'getExcusesQuery',
  get: ({ get }) => get(excusesAtom)
})
