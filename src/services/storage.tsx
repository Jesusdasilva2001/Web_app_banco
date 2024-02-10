interface IRToBank {
    login: boolean;
}

const rtBank = {
    login: false
}

export const getAllLocalStorage = (): string | null => {
    return localStorage.getItem('rtbank')
}

export const createLocalStorage = (): void => {
    localStorage.setItem('rtbank', JSON.stringify(rtBank))
}

export const changeLocalStorage = (rtBank: IRToBank): void => {
    localStorage.setItem('rtbank', JSON.stringify(rtBank))
}