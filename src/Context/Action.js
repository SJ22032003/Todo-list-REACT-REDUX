export const addTodo = (todo) => {
    return {
        type : "ADD_TODO",
        payload:{
            id: Math.random() + new Date().getTime().toString(),
            data:todo
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

