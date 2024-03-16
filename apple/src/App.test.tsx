import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { expect, test } from '@jest/globals';
import App from 'src/App'

jest.mock('src/App.css', () => ({}));
jest.mock('shared/src/Button/Button', () => ({}));

test('renders learn react link', () => {
  render(<App />)
  const linkElement = screen.getByText(/learn react/i)
  expect(linkElement).toBeTruthy()
})
