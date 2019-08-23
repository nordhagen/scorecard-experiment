import * as React from 'react'
import { connect } from 'react-redux'
import styles from './ResultsView.scss'
import ScoreItem from '../components/ScoreItem'
import { bindActionCreators } from 'redux'

class ResultsView extends React.Component {
  render() {
    let scoreItems = []
    if (this.props.scoreItems && this.props.scoreItems.length) {
      scoreItems = this.props.scoreItems.map(d => (
        <ScoreItem key={d.id} {...d} />
      ))
    }

    return (
      <table className={styles.ResultsView}>
        <tbody>
          <tr>
            <th>Item</th>
            <th>Qty</th>
            <th>Score</th>
          </tr>
          {scoreItems.length && { scoreItems }}
        </tbody>
      </table>
    )
  }
}

const mapStateToProps = state => ({
  scoreItems: state.scoreItems
})

export default connect(mapStateToProps)(ResultsView)
