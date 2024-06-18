import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  flex-direction: column;
`

const Gif = styled.img`
  margin-top: 10px;
`

const Lost = () => {
  const navigate = useNavigate();
  setTimeout(() => {
    navigate('/')
  }, 5000)

  return (
    <Container>
      <h1>You are lost</h1>
      <Gif src='https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExdjF2aWx2YWp5cDk1eDlocGRmbGVneTk2ajJzOGVneDZvajQyczFpNyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/eeh40u2H9vRQevZQ0y/giphy.gif'/>
    </Container>
  )
};
  
export default Lost;
  