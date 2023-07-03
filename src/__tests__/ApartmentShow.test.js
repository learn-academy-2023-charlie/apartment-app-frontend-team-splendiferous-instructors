import { render, screen } from '@testing-library/react';
import ApartmentShow from '../pages/ApartmentShow';
import mockApts from '../mockApts';
import mockUsers from '../mockUsers';
import { MemoryRouter, Routes, Route } from "react-router-dom";

describe("<ApartmentShow />", () => {
  beforeEach(() => {
    render(
      <MemoryRouter initialEntries={["/aptshow/1"]}>
        <Routes>
          <Route 
            path="/aptshow/:id" 
            element={ <ApartmentShow 
              apartments={mockApts} 
              currentUser={mockUsers[0]}
            />}
          />
        </Routes>
      </MemoryRouter>
    );
  })
  // ensures react component renders
  it('renders without crashing', () => {})

  // testing an element of the UI
  it('renders title to', () => {
    // debugging tool
    screen.logTestingPlaygroundURL()
    const showHeading = screen.getByRole('heading', {
      name: /124 conch st/i
    })
    expect(showHeading).toBeInTheDocument()
    expect(showHeading).toHaveTextContent(/124 Conch St A,Bikini/i)
  })

})
