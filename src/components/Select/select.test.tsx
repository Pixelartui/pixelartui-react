import '@testing-library/jest-dom';
import { SelectProps } from './types';
import { fireEvent, render } from '@testing-library/react';
import { Select } from '.';
// import { find } from 'styled-components/test-utils';


const props: SelectProps = {
    type: 'main',
    options: [
        {
            label: 'Car',
            value: 'car'
        },
        {
            label: "Lorry",
            value: 'lorry'
        },
         {
            label: "Bike",
            value: 'bike'
        },
         {
            label: "Motorbike",
            value: 'motorbike'
        }
    ],
    display: 'Vehicle',
    selectName: 'vehicle',
    selectLabel: 'My Vehicle',
    noLabel: false,
    disabled: false,
    onChange: jest.fn(),
};

afterEach(() => {
    jest.clearAllMocks();
})

describe('Select component', () => {    
    it('renders correctly', () => {
        const { getByTestId } = render(<Select {...props} />);
        const component = getByTestId('qa-select');
        expect(component).toBeInTheDocument();
    });
    it('renders correct type', () => {
        const { getByTestId } = render(<Select {...props} />);
        const component = getByTestId('qa-select');
        const flexDirection = getComputedStyle(component).flexDirection;
        expect(flexDirection).toBe('column');
    });   
    it('renders correct options', () => {
        const { getByTestId } = render(<Select {...props} />);
        const component = getByTestId('qa-select');
        const options = component.querySelectorAll('.cp-select-option');
        expect(options.length).toBe(props.options.length);
        expect(options[0]?.innerHTML).toBe(props.options[0]?.label);
        expect(options[0]?.getAttribute('data-value')).toBe(props.options[0]?.value);
    });
    it('renders correct display', () => {
        const { getByText } = render(<Select {...props} />);
        const display = getByText(props.display);
        expect(display).toBeInTheDocument();
    });
    it('renders correct label', () => {
        const { getByText } = render(<Select {...props} />);
        const label = getByText(props.selectLabel);
        expect(label).toBeInTheDocument();
    });
    it('do not renders label whe noLabel is true', () => {
        const newProps = {
            ...props,
            noLabel: true,
        };
        const { queryByText } = render(<Select {...newProps} />);
        const label = queryByText(props.selectLabel);
        expect(label).not.toBeInTheDocument();

    })
    it('renders disabled correctly', () => {
         const newProps = {
            ...props,
            disabled: true,
        };
        const { getByTestId } = render(<Select {...newProps} />);
        const component = getByTestId('qa-select');
        const displayDiv = component.querySelector('.cp-select-display .cp-pixel-box-content-inner');
        const backgroundColor = getComputedStyle(displayDiv!).background;
        const cursor = getComputedStyle(component).cursor;
        expect(backgroundColor).toBe('rgb(236, 221, 247)');
        expect(cursor).toBe('not-allowed');
    });
    it('select and display the correct option', () => {
        const { getByTestId } = render(<Select {...props} />);
        const component = getByTestId('qa-select');

        fireEvent.click(component);

        const option = component.querySelector('.cp-select-option');

        fireEvent.click(option!);

        const displayDiv = component.querySelector('.cp-select-display .cp-pixel-box-content-inner .cp-select-display-text');
        expect(displayDiv?.innerHTML).toBe(props.options[0]?.label);
    });

    it('invoke correct function when selection change', () => {
        const { getByTestId } = render(<Select {...props} />);
        const component = getByTestId('qa-select');

        fireEvent.click(component);

        const option = component.querySelector('.cp-select-option');

        fireEvent.click(option!);

        expect(props.onChange).toHaveBeenCalledTimes(1);
    });
})