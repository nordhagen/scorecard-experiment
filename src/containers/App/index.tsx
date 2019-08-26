import * as React from 'react'
import styles from './style.scss'

import ButtonsView from '../ButtonsView'
import ResultsView from '../ResultsView'

export default class App extends React.Component {
  render() {
    return (
      <main className={styles.main}>
        <ButtonsView />
        <ResultsView />
      </main>
    )
  }
}
