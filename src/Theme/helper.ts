export const adjust = (color: string, amount: number) => {
    return '#' + color.replace(/^#/, '').replace(/../g, color => ('0'+Math.min(255, Math.max(0, parseInt(color, 16) + amount)).toString(16)).substr(-2));
}

export const getContrastColor = (hexcolor: string, darkColor: string, brightColor: string) => {
    const r = parseInt(hexcolor.substring(1,3),16);
    const g = parseInt(hexcolor.substring(3,5),16);
    const b = parseInt(hexcolor.substring(5,7),16);
    const yiqColorSpace = ((r*299)+(g*587)+(b*114))/1000;
    
    return (yiqColorSpace >= 128) ? brightColor : darkColor;
}

export const handleCustomColor = (customColor: string) => {
    const customPrimaryColor = customColor;
    const customSecondaryColor = adjust(customColor, 40);
    const customTertiaryColor = adjust(customColor, -30);
    const customHover = adjust(customPrimaryColor, 5);

    return {
        customPrimaryColor,
        customSecondaryColor,
        customTertiaryColor,
        customHover,
    }
}