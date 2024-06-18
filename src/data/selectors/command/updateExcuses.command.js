import { selector } from 'recoil'
import { excusesAtom } from '../../atoms/excuses.atom'

export const updateExcusesCommand = selector({
  key: 'updateExcusesCommand',
  get: () => {},
  set: ({ get, set }, newValue) => {
    if (newValue !== undefined) {
        set(excusesAtom, newValue)
    }
  }
})
