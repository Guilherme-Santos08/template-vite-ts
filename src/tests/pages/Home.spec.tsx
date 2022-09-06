import { render, screen } from '@testing-library/react'

import { Home } from '../../pages/Home'

describe('Home', () => {
  it('renders a hello world', () => {
    render(<Home />)

    screen.getByRole('heading', { name: /Hello World/i })
  })
})
