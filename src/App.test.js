import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import BookingForm from './components/BookingForm';

test('Renders the BookingForm heading', () => {
  const availableTimes = ['1:00', '2:00'];
  render(<BookingForm availableTimes={availableTimes} />);
  const headingElement = screen.getByText("Book Now")
  expect(headingElement).toBeInTheDocument();
});

test('Test that BookingForm can be submitted by user', () => {
  const submit = jest.fn();
  const availableTimes = ['1:00', '2:00'];
  render(<BookingForm availableTimes={availableTimes} onSubmit={submit} />);
  const partySizeInput = screen.getByLabelText('Number of guests');
  fireEvent.change(partySizeInput, { target: { value: "2"}});

  const submitButton = screen.getByTestId('submitButton');
  fireEvent.click(submitButton);

  expect(submit).toHaveBeenCalled();
});