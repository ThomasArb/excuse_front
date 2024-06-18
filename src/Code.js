import { useParams } from 'react-router-dom'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { getExcusesQuery } from './data/selectors/query/getExcuses.query'
import { updateExcusesCommand } from './data/selectors/command/updateExcuses.command'
import { getExcuse } from './utils/utils'
import { useEffect } from 'react'

const Code = () => {
  const { code } = useParams()
  const excuse = useRecoilValue(getExcusesQuery)
  const setExcuse = useSetRecoilState(updateExcusesCommand)

  useEffect(() => {
    getExcuse(code, setExcuse)
  })

    return <h1>{excuse.http_code} - {excuse.tag} - {excuse.message}</h1>;
  };

export default Code;
  