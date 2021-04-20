import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render, screen } from '@testing-library/react';

import InputWithHeading from '../components/Inputs/InputRound';
import InputSideBorder from '../components/Inputs/InputSideBorder';

describe('Given an input component', () => {
    describe('When InputSideBorder is invoked', () => {
        test('There should be an input', () => {
            render(<InputSideBorder color="lilac" placeholder="something" />);
            screen.getByPlaceholderText('something');
        });
        test('Value should change ', () => {
            render(<InputSideBorder color="lilac" placeholder="something" />);
            const input = screen.getByPlaceholderText('something');
            fireEvent.change(input, { target: { value: 'hello' } });
            screen.getByDisplayValue('hello');
        });
        test("Should render if no color is passed as props with class 'input green'", () => {
            render(<InputSideBorder placeholder="something" />);
            const input = screen.getByPlaceholderText('something');
            input.classList.contains('input-green');
        });
    });
    describe('When InputWithHeading is invoked', () => {
        test('There should be an input', () => {
            render(<InputWithHeading color="lilac" placeholder="something" />);
            screen.getByPlaceholderText('something');
        });
        test('Value should change ', () => {
            render(<InputWithHeading color="lilac" placeholder="something" />);
            const input = screen.getByPlaceholderText('something');
            fireEvent.change(input, { target: { value: 'hello' } });
            screen.getByDisplayValue('hello');
        });
        test("Should render if no color is passed as props with class 'input green'", () => {
            render(<InputWithHeading placeholder="something" />);
            const input = screen.getByPlaceholderText('something');
            input.classList.contains('input-green');
        });
    });
});
