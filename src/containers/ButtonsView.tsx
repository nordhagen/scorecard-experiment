import * as React from 'react'
import styles from './ButtonsView.scss'
import ScoreButton from '../components/ScoreButton'

interface Props {}

interface State {
  count: number
}

export default class ButtonsView extends React.Component<Props, State> {
  handleClick(buttonId) {
    console.log('noop')
  }

  render() {
    return (
      <section className={styles.ButtonsView}>
        <ScoreButton id="A" clickDelegate={this.handleClick} color="#ff0000" />
        <ScoreButton id="B" clickDelegate={this.handleClick} color="#00ff00" />
        <ScoreButton id="C" clickDelegate={this.handleClick} color="#6666ff" />
        <ScoreButton id="D" clickDelegate={this.handleClick} color="#ffff00" />
      </section>
    )
  }
}
