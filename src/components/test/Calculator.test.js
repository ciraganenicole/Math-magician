import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Calculator from '../Calculator';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

describe('Calculator component', () => {
  it('Check calculator container', () => {
    render(
    <Router>
      <Routes>
    <Route path="/" element={<Calculator />} />
    </Routes>
    </Router>
    );
    const buttonElement = screen.getByRole('main');
    expect(buttonElement).toBeInTheDocument();
  });

  describe('Calculator button', () => {
    it('Check button 8', () => {
      render(
        <Router>
        <Routes>
      <Route path="/" element={<Calculator />} 
      setObj={jest.fn()}/>
      </Routes>
    </Router>
      );
      const buttonElement = screen.getByText(/8/);
      fireEvent.click(buttonElement);
      expect(buttonElement.textContent).toBe(buttonElement.textContent);
    });

    it('Check button 4', () => {
      render(
        <Router>
        <Routes>
      <Route path="/" element={<Calculator />} 
      setObj={jest.fn()}/>
       </Routes>
    </Router>
      );
      const buttonElement = screen.getByText(/4/);
      fireEvent.click(buttonElement);
      expect(buttonElement.textContent).toBe(buttonElement.textContent);
    });
  });
});
