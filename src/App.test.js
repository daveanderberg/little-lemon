import { fireEvent, getByTestId, render, screen, waitFor } from '@testing-library/react';
import BookingForm from './components/BookingForms/BookingForm';
import { act } from 'react-dom/test-utils';

test('Renders the BookingForm heading', () => {
  const availableTimes = ['1:00', '2:00'];
  const submit = jest.fn();
  render(<BookingForm availableTimes={availableTimes} submit={submit} />);
  const headingElement = screen.getByText("Reservation Details")
  expect(headingElement).toBeInTheDocument();
});

test('Test that BookingForm can be submitted by user', async () => {
  const submit = jest.fn();

  const availableTimes = ['1:00', '2:00'];
  render(<BookingForm availableTimes={availableTimes} submit={submit} />);

  const dateInput = screen.getByTestId("date");
  const timeSelect = screen.getByTestId("time");
  const submitButton = screen.getByTestId('submitButton');

  const today = new Date().toISOString().split('T')[0];

  fireEvent.change(dateInput, { target: { value: today }})
  fireEvent.change(timeSelect, { target: { value: "16:00" }})
  fireEvent.click(submitButton);

  render(<BookingForm availableTimes={availableTimes} submit={submit} initPage={1}/>)

  await waitFor(() => expect(screen.getByLabelText('First Name')).toBeInTheDocument(), {timeout: 1000});

  const firstNameInput = screen.getByLabelText('First Name');
  const lastNameInput = screen.getByLabelText('Last Name');
  const emailInput = screen.getByLabelText('Email');

  fireEvent.change(firstNameInput, { target: { value: "John"}});
  fireEvent.change(lastNameInput, { target: { value: "Doe"}});
  fireEvent.change(emailInput, { target: { value: "John@Doe.com"}});

  fireEvent.click(submitButton);
  await (() => expect(submit).toHaveBeenCalled());
});