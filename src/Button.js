import styled from 'styled-components'
import { useSetRecoilState } from 'recoil'
import { updateExcusesCommand } from './data/selectors/command/updateExcuses.command'
import { getExcuse } from './utils/utils'

const StlyedButton = styled.button`
`

function Button({url}) {
  const setExcuse = useSetRecoilState(updateExcusesCommand)

  return (
    <StlyedButton className="button" onClick={() => getExcuse(url, setExcuse)}>
      Generate a new sentence
    </StlyedButton>
  );
}

export default Button;
