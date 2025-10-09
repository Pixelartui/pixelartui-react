import {render, fireEvent} from '@testing-library/react'
import { find } from 'styled-components/test-utils';
import { ButtonProps, ButtonType } from './types';
import { Button } from './index';
import { StyledTextContainer } from './styled';

describe('Button component', () => {
    const props: ButtonProps = {
        text: 'Button',
        buttonSize: 'medium',
        buttonType: 'main',
        onClick: jest.fn(),
    };

    it('renders correctly', () => {
        const {getByText} = render(<Button {...props} />)
        const button = getByText(props.text);
        expect(button).toBeInTheDocument();
    });

    it('renders the correct size', () => {
        const {container} = render(<Button {...props} />)
        const component = find(container, StyledTextContainer);
        const styles = getComputedStyle(component!);
        expect(styles.getPropertyValue('min-height')).toBe('35px');
        expect(styles.getPropertyValue('min-width')).toBe('100px');
    });

    it('renders the correct type', () => {
        const newProps = {
            ...props,
            buttonType: 'outline' as ButtonType,
        };
        const {container} = render(<Button {...newProps} />)
        const component = find(container, StyledTextContainer);
        const styles = getComputedStyle(component!);
        expect(styles.getPropertyValue('background')).toBe('rgba(255, 255, 255, 0)');
    });


    it('invoke the correct function when clicked', () => {
        const {getByText} = render(<Button {...props} />)
        const button = getByText(props.text);
        fireEvent.click(button);

        expect(props.onClick).toHaveBeenCalledTimes(1);
    });

})