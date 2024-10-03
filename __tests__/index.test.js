import { render, screen } from '@testing-library/react'
import Home from '../pages/index'
import '@testing-library/jest-dom'

const allData = [
  { 
    "name": "Apple",
    "id": 1
  },{ 
    "name": "Banana",
    "id": 2
  }
];

describe('Home', () => {
  // test a static heading
  it('renders a heading', () => {
    render(<Home />)
 
    const heading = screen.getByRole('heading', {
      name: /The Fruits/i,
    })
 
    expect(heading).toBeInTheDocument()
  });
  // test a dynamic element rendered by json
  it('renders a link', () => {
    render(<Home allData={allData} />);
 
    const aLink = screen.getByRole('link', {
      name: /Apple/i,
    });
 
    expect(aLink).toBeInTheDocument()
  });
})