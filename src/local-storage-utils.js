export const TOKEN = 'TOKEN';

export function getTokenFromLocalStorage() {
    const token = localStorage.getItem(TOKEN);

    if (token) return JSON.parse(token);

    return {
        token: ''
    }
}

export function setTokenInLocalStorage(token) {
    localStorage.setItem(TOKEN, JSON.stringify(token));
}