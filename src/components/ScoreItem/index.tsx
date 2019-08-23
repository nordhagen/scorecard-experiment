import * as React from 'react'
import styles from './style.scss'

interface Props {
  id: string
  qty: number
  score: number
}

const ScoreItem : React.FunctionComponent<Props> = props => {
  return (
    <tr className={styles.ScoreItem}>
      <td>{props.id}</td>
      <td>{props.qty}</td>
      <td>{props.score}</td>
    </tr>
  )
}

export default ScoreItem
