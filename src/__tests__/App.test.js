import { render, screen } from '@testing-library/react';
import App from '../App';
import { BrowserRouter } from 'react-router-dom'

describe("<App />", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    )
  })
  // ensures react component renders
  it('renders without crashing', () => {})

  // testing an element of the UI
  it('renders home link on logo in header', () => {
    // debugging tool
    // screen.logTestingPlaygroundURL()
    screen.debug()
    // query
    const linkElement = screen.getByRole('link', {
      name: /vacancy 4 currency/i
    })
    // assertion
    expect(linkElement).toBeInTheDocument()
    expect(linkElement).toHaveTextContent("Vacancy 4 Currency")
  })

  it('renders home link on logo in footer', () => {
    // debugging tool
    // screen.logTestingPlaygroundURL()
    screen.debug()
    // query
    const footElement = screen.getByRole('link', {
      name: /splendiferous/i
    })
    // assertion
    expect(footElement).toBeInTheDocument()
    expect(footElement).toHaveTextContent("Splendiferous")
  })  
})
