import React from 'react';
import { render, fireEvent, waitFor, screen, queryByText } from '@testing-library/react';
import { describe, it, expect } from 'vitest'
import Index from './index.jsx';
import Display from './components/display.jsx';

const add = (title, desc) => {
    fireEvent.change(screen.getByPlaceholderText('Title'), { target: { value: title } });
    fireEvent.change(screen.getByPlaceholderText('Description'), { target: { value: desc } });
    fireEvent.click(screen.getByText('Add'));
}

const edit = (title, desc, index) => {
    fireEvent.click(screen.getByTestId(`edit-${index}`));

    fireEvent.change(screen.getByPlaceholderText('Title'), { target: { value: title } });
    fireEvent.change(screen.getByPlaceholderText('Description'), { target: { value: desc } });

    fireEvent.click(screen.getByText('Edit'));
}

describe('Todo component', () => {
    test('create toDo', async () => {
        render(<Index />);

        add("Beli Jagung", "Beli jagung di pasar")

        // Wait for item to be added
        await waitFor(() => expect(screen.getByText('Beli Jagung')).toBeInTheDocument());
        screen.debug();

    });

    test('edits item', async () => {
        render(<Index />);

        add("Beli Susu", "Beli susu di toko")

        add("Beli Jagung", "Beli jagung di pasar")

        edit("Beli Pizza", "Beli pizza di restoran", 0)

        // Wait for item to be Edited
        await waitFor(() => expect(screen.getByText('Beli Pizza')).toBeInTheDocument());

    });

    test('deletes item', async () => {
        render(<Index />);
        add("Beli Susu", "Beli susu di toko")
        add("Beli Jagung", "Beli jagung di pasar")
        // Click Delete button of first item
        fireEvent.click(screen.getByTestId('delete-0'));

        // fireEvent.click(screen.getByAltText('delete')[0]);
        screen.debug();

        // Wait for item to be deleted
        await waitFor(() => expect(screen.queryByText('Beli Susu')).toBeNull());
    });

    test('completes item', async () => {
        render(<Index />);
        add("Beli Susu", "Beli susu di toko")
        add("Beli Jagung", "Beli jagung di pasar")
        // Click Complete button of first item
        fireEvent.click(screen.getByTestId('complete-0'));
        screen.debug();
        // card beli susu sudah ada di area complete
    });

});
