

export const hexToRgb = (hex: string): [number, number, number] | null => {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result?.map(n => parseInt(n, 16)).slice(1) as [number, number, number];
};

