import { atom, AtomOptions } from 'recoil'

const defaultAtom = {
    http_code: 0,
    tag: '',
    message:''
}

const atomOptions = {
  key: 'excusesAtom',
  default: defaultAtom
}

export const excusesAtom = atom(atomOptions)
