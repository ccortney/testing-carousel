import { render, fireEvent, screen } from '@testing-library/react';
import Card from './Card';
import Carousel from './Carousel';

// smoke test
it('renders Carousel without crashing', () => {
  render(<Carousel />);

});

// snapshot test
it("matches snapshot", () => {
  const {asFragment} = render(<Carousel />);
  expect(asFragment()).toMatchSnapshot();
})

// more tests
it("should go back a picture", () => {
  const { queryByText, getByText } = render(<Carousel />);
  // move to image 2
  fireEvent.click(getByText('Right Arrow'));
  expect(queryByText("Image 1 of 3.")).not.toBeInTheDocument();
  expect(queryByText("Image 2 of 3.")).toBeInTheDocument();
  // move back to image 1
  fireEvent.click(getByText('Left Arrow'));
  expect(queryByText("Image 2 of 3.")).not.toBeInTheDocument();
  expect(queryByText("Image 1 of 3.")).toBeInTheDocument();
})

it("should go foward a picture", () => {
  const { queryByText, getByText } = render(<Carousel />);
  expect(queryByText("Image 2 of 3.")).not.toBeInTheDocument();
  expect(queryByText("Image 1 of 3.")).toBeInTheDocument();
  
  fireEvent.click(getByText('Right Arrow'));
  expect(queryByText("Image 1 of 3.")).not.toBeInTheDocument();
  expect(queryByText("Image 2 of 3.")).toBeInTheDocument();
})

it("should hide left button on first image", () => {
  const { getByText } = render(<Carousel />);
  expect(getByText('Right Arrow')).not.toHaveClass("hidden")
  expect(getByText('Left Arrow')).toHaveClass("hidden")
})

it("should hide right button on last image", () => {
  const { getByText } = render(<Carousel />);
  fireEvent.click(getByText('Right Arrow'));
  fireEvent.click(getByText('Right Arrow'));
  expect(getByText('Left Arrow')).not.toHaveClass("hidden")
  expect(getByText('Right Arrow')).toHaveClass("hidden")
})

