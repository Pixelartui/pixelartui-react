export interface PixelData {
    [key: string]: {
        color: string;
        x?: string;
        y?: string;
    };
}

export interface PixelatorProps {
    pixelPerRow: number;
    pixelPerCol: number;
    pixelSize: number;
    showgrid: boolean;
    pixels: PixelData;
    className?: string;
}
