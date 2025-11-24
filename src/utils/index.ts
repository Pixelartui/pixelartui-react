import { PixelData } from "../components/Pixelator/types";

interface CssData {
    css: string;
    canvasWidth: number;
    canvasHeight: number;
    pixelSize: number;
}

interface PixelDssToDataOutput {
    data: PixelData;
    canvasWidth: number;
    canvasHeight: number;
    pixelSize: number;
}

function processCSS(css: string) {
    // const shadowValues = css.split(":");
    // Need to refactor
    // 1. Extract only the box-shadow content
    const match = css.match(/box-shadow\s*:\s*([^;]+);/s);

    if (!match) return [];

    const value = match[1]?.trim();

    if (!value) return [];
    let entries = [];
    if (value?.includes("rgba")) {
        //  Split by commas ONLY outside parentheses

        let current = "";
        let depth = 0;

        for (const char of value) {
            if (char === "(") depth++;
            if (char === ")") depth--;

            if (char === "," && depth === 0) {
                entries.push(current.trim());
                current = "";
            } else {
                current += char;
            }
        }
        if (current.trim()) entries.push(current.trim());
    } else {
        const shadowStr = value;
        entries = shadowStr.split(",").map((shadow) => shadow.trim());
    }

    // 3. Parse each entry safely
    const final = entries.map((entry) => {
        // Extract the color (always the last token)
        const colorMatch = entry.match(
            /(rgba?\([^)]*\)|#[0-9a-fA-F]{3,6}|[a-zA-Z]+)\s*;?\s*$/
        );
        const color = colorMatch ? colorMatch[1] : null;

        // Remove the color to isolate numeric values
        const withoutColor = color ? entry.replace(color, "").trim() : entry;

        // Remaining values are: offsetX offsetY blur spread
        const [x, y, blur, spread] = withoutColor.split(/\s+/);

        return [
            x as string,
            y as string,
            blur as string,
            spread as string,
            color as string,
        ];
    });

    return final;
}

export function cssToPixelator(cssData: CssData): PixelDssToDataOutput {
    const nuberOfPixel = cssData.canvasWidth * cssData.canvasHeight;
    let pixelObject: PixelData = {};
    [...Array(nuberOfPixel).keys()].map((pixel) => {
        pixelObject = {
            ...pixelObject,
            [pixel]: {
                color: "",
                y: `${
                    cssData.pixelSize * ((pixel % cssData.canvasHeight) + 1)
                }px`,
                x: `${
                    cssData.pixelSize *
                    Math.floor(pixel / cssData.canvasHeight + 1)
                }px`,
            },
        };
    });

    const boxShadowList = processCSS(cssData.css);
    boxShadowList.forEach((item) => {
        const posX = item[0]!.split("px")[0];
        const posY = item[1]!.split("px")[0];
        const color = item[4] as string;

        const col = Math.floor(
            (Number(posX) - cssData.pixelSize) / cssData.pixelSize
        ); // which column we're in
        const row = Math.floor(
            (Number(posY) - cssData.pixelSize) / cssData.pixelSize
        ); // which row we're in
        const index = col * cssData.canvasHeight + row;
        pixelObject[index]!.color = color;
        delete pixelObject[index]!.x;
        delete pixelObject[index]!.y;
    });

    return {
        data: pixelObject,
        canvasWidth: cssData.canvasWidth,
        canvasHeight: cssData.canvasHeight,
        pixelSize: cssData.pixelSize,
    };
}
