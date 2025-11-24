import { cssToPixelator } from ".";

describe("cssToPixelator", () => {
    const input = {
        css: `.pixelart-to-css {
  box-shadow: 5px 5px 0 0 #4caf50, 10px 5px 0 0 #4caf50, 10px 10px 0 0 #4caf50;
  height: 5px;
  width: 5px;
}`,
        canvasWidth: 2,
        canvasHeight: 2,
        pixelSize: 5,
    };
    it("should output the right data type", () => {
        const pixelData = cssToPixelator(input);
        expect(typeof pixelData).toBe("object");
    });

    it("should output the right total item", () => {
        const pixelData = cssToPixelator(input);
        const pixelDataArr = Object.keys(pixelData);
        expect(pixelDataArr.length).toBe(
            input.canvasHeight * input.canvasWidth
        );
    });

    it("should output the right color per index", () => {
        const pixelData = cssToPixelator(input);
        expect(pixelData.data[0]?.color).toBe("#4caf50");
    });
});
