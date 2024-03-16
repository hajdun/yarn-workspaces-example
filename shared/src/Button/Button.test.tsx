import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { describe, expect, test } from '@jest/globals';
import Button from './Button'

describe("button test", () => {
    test('displays button', async () => {
        // ARRANGE
        render(<Button />)
      
      const text = screen.getAllByText(/BUTTON/)
      // ASSERT
      expect(text).toBeTruthy()
    })
})
