export const bgColorMap = {
    white: 'bg-white',
    primary: 'bg-primary',
    secondary: `bg-secondary`,
    gray: 'bg-gray',
    black: 'bg-black',
}

export const computeBgColor = (k) => {
    return bgColorMap[k] ? bgColorMap[k] : bgColorMap.primary
}

export const textColorMap = {
    white: 'text-white',
    primary: 'text-primary',
    secondary: 'text-secondary',
    gray: 'text-gray',
    black: 'text-black',
}

export const computeTextColor = (k) => {
    return textColorMap[k] ? textColorMap[k] : textColorMap.primary
}
