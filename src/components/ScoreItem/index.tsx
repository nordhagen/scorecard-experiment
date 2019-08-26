import * as React from 'react'

interface Props {
  id: string
  qty: number
  score: number
}

const ScoreItem: React.FunctionComponent<Props> = props => {
  return (
    <tr>
      <td>{props.id}</td>
      <td>{props.qty}</td>
      <td>{props.score}</td>
    </tr>
  )
}

export default ScoreItem
