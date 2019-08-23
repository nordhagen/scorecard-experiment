import * as React from 'react'
import styles from './App.scss'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { clockTick, fetchEPG, closeModal } from '../state/actions'

import ButtonsView from './ButtonsView'
import ResultsView from './ResultsView'

class App extends React.Component {
  render() {
    return (
      <main className={styles.main}>
        <ButtonsView />
        <ResultsView />
      </main>
    )
  }
}

const mapStateToProps = state => ({
  nav: state.nav
})

const mapDispatchToProps = dispatch =>
  bindActionCreators({ clockTick, fetchEPG, closeModal }, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
