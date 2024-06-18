import styled from 'styled-components'
import Button from './Button'
import { getExcusesQuery } from './data/selectors/query/getExcuses.query'
import { useRecoilValue } from 'recoil'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`

const SubContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 25px;
  background: lightgrey;
  border: 1px solid blue;
`

const Title = styled.h3`
`

const Sentence = styled.p``

function App() {
  const excuse = useRecoilValue(getExcusesQuery)

  return (
    <Container className="App">
      <SubContainer>
        <Title>Excuses De Dev</Title>
        <Sentence>{excuse.http_code}</Sentence>
        <Sentence>{excuse.tag}</Sentence>
        <Sentence>{excuse.message}</Sentence>
        <Button url={'random'}/>
      </SubContainer>
    </Container>
  );
}

export default App;
