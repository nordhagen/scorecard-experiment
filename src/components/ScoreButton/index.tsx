import * as React from 'react'
import styles from './style.scss'

interface Props {
  id: string
  color: string
  clickDelegate: Function
}

const ScoreButton: React.FunctionComponent<Props> = props => {
  let inlineStyle = {
    backgroundColor: props.color
  }
  return (
    <button
      className={styles.ScoreButton}
      onClick={e => props.clickDelegate(props.id)}
      style={inlineStyle}
    >
      {props.id}
    </button>
  )
}

export default ScoreButton
