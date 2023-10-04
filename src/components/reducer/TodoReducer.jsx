export const toDoReducer = (state, {type, payload})=> {
     switch(type){
        // case "TODO_LIST_ARRAY": return {
        //     ...state,
        //     todoList : [...todoList, state.payload]
        // }
        case 'SET_TITLE' : return {
            ...state,
            title : payload
        }
        default : return {
            state
        }
     }
}