import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '@testing-library/jest-dom';
import Home from '../Home';

describe('Navigation page', () => {
  it('rNavigation container', () => {
    render(
      <Router>
        <Routes>
        <Route path="/" index element={<Home />} />
        </Routes>
      </Router>,
    );
    const navBar = screen.getByRole('list');
    expect(navBar).toBeInTheDocument();
  });

  it('Number of links', () => {
    render(
      <Router>
      <Routes>
      <Route path="/" index element={<Home />} />
      </Routes>
    </Router>,
    );
    const linkElement = screen.getAllByRole('link');
    expect(linkElement.length).toBe(3);
  });
});
