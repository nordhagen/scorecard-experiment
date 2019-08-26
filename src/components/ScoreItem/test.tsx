import React from 'react'
import ScoreItem from './index'
import renderer from 'react-test-renderer'

test('It renders correctly', () => {
  const pastItem = renderer.create(<ScoreItem id="a" qty={1} score={50} />)

  expect(pastItem.toJSON()).toMatchSnapshot()
})
