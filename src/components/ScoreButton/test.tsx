import React from 'react'
import ScoreButton from './index'
import renderer from 'react-test-renderer'

test('It renders correctly', () => {
  const pastItem = renderer.create(
    <ScoreButton id="a" color="#ff0000" clickDelegate={console.log} />
  )

  expect(pastItem.toJSON()).toMatchSnapshot()
})
