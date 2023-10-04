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
        case 'SET_CATEGORY' : return {
            ...state,
            category : payload
        }
        case 'SET_PRIORITY' : return {
            ...state,
            priority: payload
        }
        case 'SET_TASK' : return {
            ...state,
             task: payload
            }
        case 'TODO_ARRAY' : return {
                ...state,
                 todoList: [...state.todoList, payload]
                }
        case 'CLEAR_ALL' : return {
            ...state,
            category: '',
            priority: '',
            title: '',
            task: ''
        }
        default : return {
            state
        }
     }
}