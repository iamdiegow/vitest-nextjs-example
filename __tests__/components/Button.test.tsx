import { expect, test } from 'vitest'
import { screen, render } from '@testing-library/react'

import { Button } from '@/components/Button'

test('it renders without crashing', () => {
	render(<Button />)
	const button = screen.getByRole('button')
	expect(button).toBeInTheDocument()
})
