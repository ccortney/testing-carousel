import { render, screen } from '@testing-library/react';
import Card from './Card';

// smoke test
it('renders Card without crashing', () => {
    render(<Card />);
    // const linkElement = screen.getByText(/learn react/i);
    // expect(linkElement).toBeInTheDocument();
  });

// snapshot test
it("matches snapshot", () => {
    const {asFragment} = render(<Card />);
    expect(asFragment()).toMatchSnapshot();
  })