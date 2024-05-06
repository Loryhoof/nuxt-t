export const useUtils = () => {
    const add = (a, b) => {
        return a + b
    }
    const sub = (a, b) => {
        return a - b
    }
    return {
        add,
        sub
    }
}