export const isExternalUrl = (url) => {
    return url.startsWith('http://') || url.startsWith('https://') || url.startsWith('//')
}
