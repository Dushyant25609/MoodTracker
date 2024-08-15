import { Action, createStore } from "redux"

export type State = {
    happyCount: number,
    sadCount: number,
}

const initialsValues = {
    happyCount: 0,
    sadCount: 0
}

const reducer = (currState: State = initialsValues,action: Action):State => {
    if(action.type === "happy buuton clicked"){
        return {...currState, happyCount: currState.happyCount + 1}
    }
    else if(action.type === "sad buuton clicked"){
        return {...currState, sadCount: currState.sadCount + 1}
    }
    return currState
}

const store = createStore(reducer,(window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__())

export default store;