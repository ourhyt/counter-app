import {fireEvent, render, screen} from "@testing-library/react";
import {CounterApp} from "../src/CounterApp.jsx";

describe('Test counterApp', () => {
    const value = 125

    it('should create snapshot', () => {
        const {container} =render(<CounterApp value={123}/>);
        expect(container).toMatchSnapshot();
    });

    it('should start with value', () => {
        render(<CounterApp value={value} />)
        expect(screen.getByText(value)).toBeTruthy();
    });

    it('should increment with +1 click', () => {
        render(<CounterApp value={value}/>);
        fireEvent.click(screen.getByText('+1'));
        expect(screen.getByText('126')).toBeTruthy()
    });

    it('should decrease with +1 click', () => {
        render(<CounterApp value={value}/>);
        fireEvent.click(screen.getByText('-1'));
        expect(screen.getByText('124')).toBeTruthy()
    });

    it('should reset with +1 click', () => {
        render(<CounterApp value={value}/>);
        fireEvent.click(screen.getByText('-1'));
        fireEvent.click(screen.getByText('-1'));
        fireEvent.click(screen.getByText('-1'));
        // fireEvent.click(screen.getByText('RESET'));
        fireEvent.click(screen.getByRole('button', {name: 'btn-reset'}))
        expect(screen.getByText('125')).toBeTruthy()
    });
});