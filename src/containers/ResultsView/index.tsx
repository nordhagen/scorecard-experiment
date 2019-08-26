import * as React from 'react'
import styles from './style.scss'
import ScoreItem from '../../components/ScoreItem'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { computeScoreTotals, ScoreTotals } from '../../selectors'
import { ScoreState } from '../../store/score/types'
import { resetScoreItems } from '../../store/score/actions'

interface ResultsViewProps {
  scoreState: ScoreState
  resetScoreItems: typeof resetScoreItems
  totals: ScoreTotals
}

class ResultsView extends React.Component<ResultsViewProps> {
  handleNewGame() {}

  render() {
    const scoreItems = this.props.scoreState.items.map(d => (
      <ScoreItem
        key={d.type}
        id={d.type}
        qty={d.count}
        score={this.props.totals[d.type]}
      />
    ))

    return (
      <section className={styles.ResultsView}>
        <header>
          <h2>Player items</h2>
        </header>
        <div className={styles.resultsColumn}>
          <div className={styles.resultsTable}>
            <table>
              <thead>
                <tr>
                  <th className={styles.itemCell}>Item</th>
                  <th className={styles.qtyCell}>Qty</th>
                  <th className={styles.scoreCell}>Score</th>
                </tr>
              </thead>
              <tbody>{scoreItems}</tbody>
            </table>
          </div>
          <div className={styles.summary}>
            <div className={styles.bonuses}>
              <p>Bonuses: {this.props.totals.bonus}</p>
            </div>
            <div className={styles.totals}>
              <h3>Total score:</h3>
              <p className={styles.totalScore}>{this.props.totals.score}</p>
              <button
                type="button"
                className={styles.resetButton}
                onClick={this.props.resetScoreItems}
              >
                New game
              </button>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

const mapStateToProps = state => ({
  scoreState: state.score,
  scoreConfig: state.config,
  totals: computeScoreTotals(state)
})

const mapDispatchToProps = dispatch =>
  bindActionCreators({ resetScoreItems }, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ResultsView)
