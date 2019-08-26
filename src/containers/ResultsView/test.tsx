import React from 'react'
import ResultsView from '.'
import renderer from 'react-test-renderer'
import { Provider } from 'react-redux'
import store from '../../store'

test('It renders correctly', () => {
  const pastItem = renderer.create(
    <Provider store={store}>
      <ResultsView />)
    </Provider>
  )
  expect(pastItem.toJSON()).toMatchSnapshot()
})
