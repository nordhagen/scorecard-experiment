import * as React from 'react'
import styles from './ButtonsView.scss'
import ScoreButton from '../components/ScoreButton'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { AppState } from '../store'
import { addScoreItem } from '../store/score/actions'
import { ScoreConfig } from '../store/config/types'

interface ButtonsViewProps {
  config: ScoreConfig
  addScoreItem: typeof addScoreItem
}

class ButtonsView extends React.Component<ButtonsViewProps> {
  colorMap = {
    a: '#F27781',
    b: '#04BF8A',
    c: '#F2CF1D',
    d: '#F29F05'
  }

  render() {
    const buttons = this.props.config.items.map(item => (
      <ScoreButton
        id={item.type}
        key={item.type}
        clickDelegate={this.props.addScoreItem}
        color={this.colorMap[item.type]}
      />
    ))

    return (
      <section className={styles.ButtonsView}>
        <header>
          <h1>
            <span className={styles.kahoot}>Kahoot!</span> Points
          </h1>
        </header>
        <div className={styles.buttons}>{buttons}</div>
      </section>
    )
  }
}

const mapStateToProps = (state: AppState) => ({
  config: state.config
})

const mapDispatchToProps = dispatch =>
  bindActionCreators({ addScoreItem }, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ButtonsView)
