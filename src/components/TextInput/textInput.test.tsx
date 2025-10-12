import '@testing-library/jest-dom';
import {render} from '@testing-library/react';
import { InputText } from '.';

const props = {
    type: 'main' as const,
};

describe('Button component', () => {    
    it('renders correctly', () => {
        const {getByTestId} = render(<InputText {...props} />)
        const textInput = getByTestId('qa-input-text');
        expect(textInput).toBeInTheDocument();
    });
})