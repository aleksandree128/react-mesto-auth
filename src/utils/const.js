export const apiUrl = {
    baseUrl: `${window.location.protocol}${process.env.REACT_APP_API_URL || '//localhost:3000'}`,
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
    }
}