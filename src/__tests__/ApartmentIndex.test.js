import { render, screen } from '@testing-library/react';
import ApartmentIndex from '../pages/ApartmentIndex';
import { BrowserRouter } from 'react-router-dom'
import mockApts from '../mockApts';

describe("<ApartmentIndex />", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <ApartmentIndex apartments={mockApts}/>
      </BrowserRouter>
    )
  })
  // ensures react component renders
  it('renders without crashing', () => {})

  // testing an element of the UI
  it('renders an image for each apartment', () => {
    // debugging tool
    // screen.logTestingPlaygroundURL()
    // screen.debug()
    // // query
    const imgElement = screen.getAllByRole("presentation");
    // // assertion
    expect(imgElement.length).toBe(2)
    expect(imgElement[0]).toHaveAttribute("src", "https://upload.wikimedia.org/wikinews/en/0/00/FanExpo_Canada_crowd_IMG_6145.jpg")
    expect(imgElement[0]).toHaveAttribute("alt", "a space you need to experience"
    )
  })

  it('renders a title for each apartment', () => {
    mockApts.forEach(apt => {
      const aptImage = screen.getByRole('heading', {
        name: `Located in ${apt.state}`
      })
      expect(aptImage).toBeInTheDocument()
    })
  })
})
