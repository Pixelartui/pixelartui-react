export type StyledPixelBoxType = "dark" | "light";
export interface StyledPixelBoxProps {
    children: React.ReactNode;
    error?: boolean;
    type?: StyledPixelBoxType;
    disabled?: boolean;
    backgroundColor?: string;
    round?: boolean;
    height?: string;
    width?: string;
    fullwidth?: boolean;
    className?: string;
}
