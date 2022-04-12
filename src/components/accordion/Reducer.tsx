export type StateType = {
    collapsed: boolean
}

type ToggleCollapsed = {
    type: "TOGGLE-COLLAPSED"
}
export type ActionType = ToggleCollapsed


export const reducer = (state: StateType, action: ActionType): StateType => {
    switch (action.type) {
        case "TOGGLE-COLLAPSED":
            const stateCopy = {...state}
            stateCopy.collapsed = !state.collapsed
            return stateCopy
        default:
            throw new Error('Sorry bad action type')
    }
    return state
}