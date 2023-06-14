import { render, screen } from '@testing-library/react';
import Header from '../components/Header';
import { BrowserRouter } from 'react-router-dom'

describe("<Header />", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    )
  })
  // ensures react component renders
  it('renders without crashing', () => {})

  // testing an element of the UI
  it('renders home link on logo', () => {
    // debugging tool
    screen.logTestingPlaygroundURL()
    // query
    const headLink = screen.getByRole('link', {
      name: /vacancy 4 currency/i
    })
    // assertion
    expect(headLink).toBeInTheDocument()
    expect(headLink).toHaveTextContent("Vacancy 4 Currency")
  })
})