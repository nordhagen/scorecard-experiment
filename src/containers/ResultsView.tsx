import * as React from 'react'
import styles from './ResultsView.scss'
import ScoreItem from '../components/ScoreItem'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { computeScoreTotals, ScoreTotals } from '../selectors'
import { ScoreState } from '../store/score/types'
import { resetScoreItems } from '../store/score/actions'
import { clearLine } from 'readline'

interface ResultsViewProps {
  scoreState: ScoreState
  resetScoreItems: typeof resetScoreItems
  totals: ScoreTotals
}

class ResultsView extends React.Component<ResultsViewProps> {
  render() {
    const scoreItems = this.props.scoreState.items.map(d => (
      // <ScoreItem key={d.type} {...d} />
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

        <div className={styles.bonuses}>
          <h3>Bonuses: {this.props.totals.bonus}</h3>
        </div>
        <div className={styles.totals}>
          <h3>Total score: {this.props.totals.score}</h3>
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

export default connect(mapStateToProps)(ResultsView)
