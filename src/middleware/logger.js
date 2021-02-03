const logger = (store) => (next) => (action) => {
    console.group(action)
        console.log("The action is", action)
        const result = next(action)
        console.log("The result of the action is", store.getState())
    console.groupEnd()

    return result
}

export default logger