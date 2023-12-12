export const setItem = (key, value) => {
    try {
        localStorage.setItem(key, value)
    } catch (err) {
        console.log(err)
    }
}

export const getItem = (key) => {
    try {
        return localStorage.getItem(key)
    } catch (err) {
        console.log(err)
    }
}
export const removeItem = (key) => {
    try {
        return localStorage.removeItem(key)
    } catch (err) {
        console.log(err)
    }
}