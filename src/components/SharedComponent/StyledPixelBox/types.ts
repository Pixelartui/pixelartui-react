export type StyledPixelBoxStyle = "dark" | "light";
export interface StyledPixelBoxProps {
    children: React.ReactNode;
    error?: boolean;
    style?: StyledPixelBoxStyle;
    disabled?: boolean;
    backgroundColor?: string;
    round?: boolean;
    height?: string;
    width?: string;
    fullwidth?: boolean;
    className?: string;
}
