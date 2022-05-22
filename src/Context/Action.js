export const addTodo = (todo) => {
    return {
        type : "ADD_TODO",
        payload:{
            id: Math.random() + new Date().getTime().toString(),
            data:todo,
            checked:false
        },
    }
}

export const deleteTodo = (id) => {
    return {
        type : "DELETE_TODO",
        payload:id,
    }
}

export const removeTodo = () => {
    return {
        type : "REMOVE_TODO",
    }
}

export const isDone = (id) => {
    return {
        type : "IS_DONE",
        payload:id,
    }
}

export const isComplete = () => {
    return {
        type : "IS_COMPLETE",
    }
}

export const themeChange = (theme) => {
    return {
        type : "THEME_CHANGE",
        payload:theme,
    }
}