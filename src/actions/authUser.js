export const SET_AUTHED_USER = "SET_AUTHED_USER"

export function authUser (id) {
    return {
        type: SET_AUTHED_USER,
        id
    }
}