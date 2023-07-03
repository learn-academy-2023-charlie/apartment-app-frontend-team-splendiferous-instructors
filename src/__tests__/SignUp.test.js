import { render, screen, fireEvent } from '@testing-library/react';
import SignUp from '../components/SignUp';
import { BrowserRouter } from 'react-router-dom'

describe("<SignUp />", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <SignUp />
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
    const signUp = screen.getAllByRole('textbox')
    // screen.debug(signUp) 
    // // assertion
    expect(signUp[0]).toBeInTheDocument()
    
    const input = screen.getByPlaceholderText(/email/i)
    // console.log("before fireEvent", input.value)
    expect(input.value).toBe("")
    fireEvent.change(input, { target: { value: "so@fake.com" } })
    // console.log("after fireEvent", input.value)
    expect(input.value).toBe("so@fake.com")
  })

  it('renders a LogIn link on the form', () => {
    // query
    const logIn = screen.getByRole('link', {
      name: /login/i
    }) 
    // assertion
    expect(logIn).toBeInTheDocument()
    expect(logIn).toHaveTextContent(/login/i)

  })

  it('renders a password field on the form', () => {
    // query
    const signUp = screen.getAllByRole('textbox')
    // screen.debug(signUp) 
    // // assertion
    expect(signUp[1]).toBeInTheDocument()
    
    const input = screen.getByPlaceholderText("password")
    // console.log("before fireEvent", input.value)
    expect(input.value).toBe("")
    fireEvent.change(input, { target: { value: "111111" } })
    // console.log("after fireEvent", input.value)
    expect(input.value).toBe("111111")
  })

  it('renders a password confirmation field on the form', () => {
    // query
    const signUp = screen.getAllByRole('textbox')
    // screen.debug(signUp) 
    // // assertion
    expect(signUp[2]).toBeInTheDocument()
    
    const input = screen.getByPlaceholderText("confirm password")
    // console.log("before fireEvent", input.value)
    expect(input.value).toBe("")
    fireEvent.change(input, { target: { value: "111111" } })
    // console.log("after fireEvent", input.value)
    expect(input.value).toBe("111111")
  })
})