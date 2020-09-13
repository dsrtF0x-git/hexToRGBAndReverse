function hexToRGB(hex: string): { r: number, g: number, b: number } {
    if (hex.length === 3) {
        const hr = hex[0];
        const hg = hex[1];
        const hb = hex[2];
        return hexToRGB(`${hr}${hr}${hg}${hg}${hb}${hb}`);
    }
    const [r, g, b] = [0, 2, 4]
        .map(offset => hex.substring(offset, offset + 2))
        .map(hexChannel => parseInt(hexChannel, 16));
    return { r, g, b };
}


function RGBToHex(r: number, g: number, b: number): string {
    return [r, g, b]
        .map(decimalChannel => Math.max(0, Math.min(255, decimalChannel)).toString(16))
        .map(hexChannel => hexChannel.length === 1 ? `0${hexChannel}` : hexChannel)
        .join('');
}
