import '@testing-library/jest-dom';
import {fireEvent, render} from '@testing-library/react';
import { find } from 'styled-components/test-utils';
import { TextInput } from '.';
import { StyledInput } from './styled';
import { TextInputProps } from './types';

const props: TextInputProps = {
    inputName: 'test-input',
    textLabel: 'The test',
    placeholder: 'Placeholder',
    type: 'main' as const,
};

describe('Text Input component', () => {    
    it('renders correctly', () => {
        const {getByTestId} = render(<TextInput {...props} />)
        const textInput = getByTestId('qa-input-text');
        expect(textInput).toBeInTheDocument();
    });

    it('renders correct name and id', () => {
        const {getByTestId} = render(<TextInput {...props} />)
        const textInput = getByTestId('qa-input-text');
        const component = find(textInput, StyledInput);
        expect(component!.getAttribute('name')).toBe(props.inputName);
        expect(component!.getAttribute('id')).toBe(`cp-input-text-${props.inputName}`);
    });

    it('renders correct label', () => {
        const {getByText} = render(<TextInput {...props} />)
        const label = getByText(props.textLabel!);
        expect(label).toBeInTheDocument();
    });

    it('renders correct placeholder', () => {
        const {getByPlaceholderText} = render(<TextInput {...props} />)
        const component = getByPlaceholderText(props.placeholder!);
        expect(component).toBeInTheDocument();
    });

    it('will not renders label if noLabel is true', () => {
        const newProps = {
            ...props,
            noLabel: true,
        };

        const {queryByLabelText} = render(<TextInput {...newProps} />)
        const label = queryByLabelText(newProps.textLabel!);

        expect(label).not.toBeInTheDocument();
    });

    it('renders correct custom background color', () => {
        const newProps = {
            ...props,
            backgroundColor: '#b13737',
        };
        const {getByTestId} = render(<TextInput {...newProps} />)
        const textInput = getByTestId('qa-input-text');
        const component = find(textInput, StyledInput);
        const styles = getComputedStyle(component!);
        expect(styles.background).toBe('rgb(177, 55, 55)');
    });

    it('renders error validation message', () => {
        const newProps = {
            ...props,
            error: 'Error'
        };
        const {getByText} = render(<TextInput {...newProps} />)
        const error = getByText(newProps.error!);
        expect(error).toBeInTheDocument();
    });

    it('invoke the correct function when change', () => {       
         const newProps = {
            ...props,
            onChange: jest.fn(),
        };
        const {getByTestId} = render(<TextInput {...newProps} />)

        const textInput = getByTestId('qa-input-text');
        const component = find(textInput, StyledInput);
        fireEvent.change(component!, {target: {value: 'a'}});

        expect(newProps.onChange).toHaveBeenCalledTimes(1);
    });
    
})