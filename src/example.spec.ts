import { expect, test } from 'bun:test'
import { sum } from './example'

test('2 + 2', () => {
  expect(sum(2, 2)).toBe(4)
})
