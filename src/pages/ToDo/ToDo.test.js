import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import Index from './index.jsx';

describe('Index component', () => {
    test('adds new item', async () => {
        render(<Index />);

        // Enter title and description
        fireEvent.change(screen.getByLabelText('Title'), { target: { value: 'New Task' } });
        fireEvent.change(screen.getByLabelText('Description'), { target: { value: 'Description of new task' } });

        // Click Add button
        fireEvent.click(screen.getByText('Add'));

        // Wait for item to be added
        await waitFor(() => expect(screen.getByText('New Task')).toBeInTheDocument());
    });

    test('edits item', async () => {
        render(<Index />);

        // Click Edit button of first item
        fireEvent.click(screen.getAllByText('Edit')[0]);

        // Edit title
        fireEvent.change(screen.getByLabelText('Title'), { target: { value: 'Edited Task' } });

        // Click Add button
        fireEvent.click(screen.getByText('Add'));

        // Wait for item to be edited
        await waitFor(() => expect(screen.getByText('Edited Task')).toBeInTheDocument());
    });

    test('deletes item', async () => {
        render(<Index />);

        // Click Delete button of first item
        fireEvent.click(screen.getAllByText('Delete')[0]);

        // Wait for item to be deleted
        await waitFor(() => expect(screen.queryByText('Edited Task')).not.toBeInTheDocument());
    });

    test('completes item', async () => {
        render(<Index />);

        // Click Complete button of first item
        fireEvent.click(screen.getAllByText('Complete')[0]);

        // Wait for item to be completed
        await waitFor(() => expect(screen.getByText('Edited Task')).toHaveStyle('text-decoration: line-through'));
    });

    test('searches item', async () => {
        render(<Index />);

        // Enter search text
        fireEvent.change(screen.getByPlaceholderText('Search...'), { target: { value: 'Edited Task' } });

        // Wait for filtered item to be shown
        await waitFor(() => expect(screen.getByText('Edited Task')).toBeInTheDocument());
    });
});
