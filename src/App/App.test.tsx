import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('App', () => {
    test('Clicking Increase increases the number', () => {
        // Given
        render(<App />);

        const button = screen.getByRole('button', { name: 'Increase' });

        // When
        userEvent.click(button);

        // Then
        const counter = screen.queryByText('The number is 1');
        expect(counter).toBeInTheDocument();
    });
});
