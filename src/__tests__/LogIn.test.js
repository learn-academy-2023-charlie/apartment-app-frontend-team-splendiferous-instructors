import { render, screen } from '@testing-library/react';
import LogIn from '../components/LogIn';
import { BrowserRouter } from 'react-router-dom'

describe("<LogIn />", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <LogIn />
      </BrowserRouter>
    )
  })
  // ensures react component renders
  it('renders without crashing', () => {})

  // testing an element of the UI
  it('renders an email field on the form', () => {
    // debugging tool
    // screen.logTestingPlaygroundURL()
    // query
    const logIn = screen.getByText(/email:/i)
    // screen.debug(logIn) 
    // assertion
    expect(logIn).toBeInTheDocument()
    expect(logIn).toHaveTextContent(/email:/i)
  })

  it('renders a Signup link on the form', () => {
    // query
    const signUp = screen.getByText(/not registered yet,/i) 
    // assertion
    expect(signUp).toBeInTheDocument()
    expect(signUp).toHaveTextContent(/signup/i)

  })

  it('renders a password field on the form', () => {
    // query
    const passWord = screen.getByPlaceholderText(/password/i) 
    // assertion
    expect(passWord).toBeInTheDocument()
    expect(passWord).toMatchSnapshot()
  })
})