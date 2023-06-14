import { render, screen } from '@testing-library/react';
import Footer from '../components/Footer';
import { BrowserRouter } from 'react-router-dom'

describe("<Footer />", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    )
  })
  // ensures react component renders
  it('renders without crashing', () => {})

  // testing an element of the UI
  it('renders home link on copyright', () => {
    // debugging tool
    screen.logTestingPlaygroundURL()
    // query
    const footLink = screen.getByRole('link', {
      name: /splendiferous/i
    })
    // assertion
    expect(footLink).toBeInTheDocument()
    expect(footLink).toHaveTextContent(/splendiferous/i)
  })
})