import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'; // To provide routing context
import userEvent from '@testing-library/user-event'; // For more complex user events
import Header from './Header';

// Mock react-router-dom module
vi.mock('react-router-dom', () => ({
  ...vi.importActual('react-router-dom'), // Use importActual to import everything else normally
  useNavigate: vi.fn(), // Mock the useNavigate function
}));

describe('Header Component', () => {
  const renderHeader = () => render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  );

  test('renders the header with a title', () => {
    renderHeader();

    // Check if the title is rendered correctly
    const titleElement = screen.getByText(/Recipe Advisor/i);
    expect(titleElement).toBeInTheDocument();
  });

  test('contains navigation links', () => {
    renderHeader();

    // Check if "Home" and "My Meals" links exist
    const homeLink = screen.getByText(/Home/i);
    const myMealsLink = screen.getByText(/My Meals/i);

    expect(homeLink).toBeInTheDocument();
    expect(myMealsLink).toBeInTheDocument();
  });

  test('clicking on the search icon navigates to the search page', async () => {
    renderHeader();

    // Check if the search icon is present
    const searchIcon = screen.getByAltText(/Search Icon/i);
    expect(searchIcon).toBeInTheDocument();

    // Simulate clicking on the search icon
    userEvent.click(searchIcon);

    // Verify that the URL has changed (simulated navigation)
    expect(window.location.pathname).toBe('/search/');
  });

  test('the search button triggers the correct navigation', async () => {
    // Get the mocked navigate function
    const mockNavigate = vi.fn();
    // Override the default mock of useNavigate with the mocked function
    vi.mocked(require('react-router-dom')).useNavigate.mockReturnValue(mockNavigate);

    renderHeader();

    // Find the search button by its alt text and simulate a click
    const searchButton = screen.getByAltText(/Search Icon/i);
    userEvent.click(searchButton);

    // Verify that navigate was called with the correct path
    expect(mockNavigate).toHaveBeenCalledWith('/search/');
  });
});
